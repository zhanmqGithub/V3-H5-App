import md5 from 'md5'

// 定义参数对象的接口
interface ParamObject {
  [key: string]: string | number | boolean | ParamObject | (string | number | boolean)[]
}

export default class SignMd5Utils {
  /**
   * 对JSON参数进行升序排序
   * @param jsonObj 发送参数
   * @returns 排序后的参数对象
   */
  static sortAsc(jsonObj: ParamObject): ParamObject {
    const arr: string[] = []
    let num = 0

    for (const key in jsonObj) {
      if (jsonObj.hasOwnProperty(key)) {
        arr[num] = key
        num++
      }
    }

    const sortArr = arr.sort()
    const sortObj: ParamObject = {}

    for (const key of sortArr) {
      sortObj[key] = jsonObj[key]
    }

    return sortObj
  }

  /**
   * 获取签名
   * @param url 请求的url,应该包含请求参数(url的?后面的参数)
   * @param requestParams 请求参数(@RequestParam(get)的JSON参数)
   * @param requestBodyParams 请求参数(@RequestBody(post)参数)
   * @returns 生成的签名字符串
   */
  static getSign(
    signatureSecret: string,
    url: string,
    requestParams: ParamObject = {},
    requestBodyParams?: ParamObject,
  ): string {
    const urlParams = this.parseQueryString(url)
    let jsonObj = this.mergeObject(urlParams, requestParams)

    if (requestBodyParams) {
      jsonObj = this.mergeObject(jsonObj, requestBodyParams)
    }

    const requestBody = this.sortAsc(jsonObj)
    delete requestBody._t

    console.log('sign requestBody:', requestBody)
    return md5(JSON.stringify(requestBody) + signatureSecret).toUpperCase()
  }

  /**
   * 将url中请求参数组装成json对象
   * @param url 请求的url
   * @returns 解析后的参数对象
   */
  static parseQueryString(url: string): ParamObject {
    const urlReg = /^[^?]+\?([\w\W]+)$/
    const paramReg = /([^&=]+)=([\w\W]*?)(&|$|#)/g
    const urlArray = urlReg.exec(url)
    const result: ParamObject = {}

    // 处理URL路径中的特殊参数
    const lastpathVariable = url.substring(url.lastIndexOf('/') + 1)
    if (lastpathVariable.includes(',')) {
      let processedVariable = lastpathVariable
      if (processedVariable.includes('?')) {
        processedVariable = processedVariable.substring(0, processedVariable.indexOf('?'))
      }
      result['x-path-variable'] = decodeURIComponent(processedVariable)
    }

    if (urlArray && urlArray[1]) {
      const paramString = urlArray[1]
      let paramResult: RegExpExecArray | null

      while ((paramResult = paramReg.exec(paramString)) !== null) {
        // 数字值转为string类型，保持前后端加密规则一致
        if (this.IsNaN(paramResult[2])) {
          result[paramResult[1]] = `${paramResult[2]}`
        } else {
          result[paramResult[1]] = paramResult[2]
        }
      }
    }

    return result
  }

  /**
   * 合并两个对象
   * @param objectOne 第一个对象
   * @param objectTwo 第二个对象
   * @returns 合并后的对象
   */
  static mergeObject(objectOne: ParamObject, objectTwo: ParamObject): ParamObject {
    if (objectTwo && Object.keys(objectTwo).length > 0) {
      for (const key in objectTwo) {
        if (objectTwo.hasOwnProperty(key)) {
          let value = objectTwo[key]

          // 数字值转为string类型，保持前后端加密规则一致
          if (this.IsNaN(value)) {
            value = value.toString()
          }

          // 布尔类型转成string类型，保持前后端加密规则一致
          if (typeof value === 'boolean') {
            value = value.toString()
          }

          objectOne[key] = value
        }
      }
    }

    return objectOne
  }

  /**
   * URL参数编码
   * @param param 要编码的参数
   * @param key 参数键名
   * @param encode 是否编码
   * @returns 编码后的参数字符串
   */
  static urlEncode(
    param: string | number | boolean | ParamObject | (string | number | boolean)[],
    key?: string,
    encode?: boolean,
  ): string {
    if (param == null) return ''

    let paramStr = ''
    const type = typeof param

    if (type === 'string' || type === 'number' || type === 'boolean') {
      const encodedParam =
        encode == null || encode ? encodeURIComponent(String(param)) : String(param)
      paramStr += `&${key}=${encodedParam}`
    } else if (Array.isArray(param)) {
      for (let i = 0; i < param.length; i++) {
        const k = key ? `${key}[${i}]` : `${i}`
        paramStr += this.urlEncode(param[i], k, encode)
      }
    } else if (type === 'object') {
      const paramCopy = param as ParamObject
      for (const i in paramCopy) {
        if (param.hasOwnProperty(i)) {
          const k = key ? `${key}.${i}` : i
          paramStr += this.urlEncode(paramCopy[i], k, encode)
        }
      }
    }

    return paramStr
  }

  /**
   * 生成接口签名用的时间戳
   * @returns 当前时间戳
   */
  static getTimestamp(): number {
    return new Date().getTime()
  }

  /**
   * 判断值是否为数值类型
   * @param value 要判断的值
   * @returns 如果是数值类型则返回true，否则返回false
   */
  static IsNaN(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value)
  }
}
