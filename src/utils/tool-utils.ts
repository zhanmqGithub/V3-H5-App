/**
 * 浅克隆
 * 只克隆对象/数组的表层结构，嵌套对象/数组仍为引用关系
 * @param source 要克隆的源数据
 * @returns 克隆后的新数据，与源数据类型一致
 */
export const shallowClone = <T>(source: T): T => {
  // 基本类型直接返回
  if (source === null || typeof source !== 'object') {
    return source
  }

  // 处理数组
  if (Array.isArray(source)) {
    return [...source] as unknown as T
  }

  // 处理日期对象
  if (source instanceof Date) {
    return new Date(source) as unknown as T
  }

  // 处理正则对象
  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags) as unknown as T
  }

  // 处理Map对象
  if (source instanceof Map) {
    return new Map(source) as unknown as T
  }

  // 处理Set对象
  if (source instanceof Set) {
    return new Set(source) as unknown as T
  }

  // 处理普通对象
  if (Object.prototype.toString.call(source) === '[object Object]') {
    return { ...source } as T
  }

  // 其他对象类型直接返回引用
  return source
}

/**
 * 深克隆
 * 完全克隆对象/数组的所有层级，嵌套结构也会被克隆为新对象
 * @param source 要克隆的源数据
 * @returns 克隆后的新数据，与源数据类型一致
 */
export const deepClone = <T>(source: T): T => {
  // 基本类型直接返回
  if (source === null || typeof source !== 'object') {
    return source
  }

  // 处理数组
  if (Array.isArray(source)) {
    return source.map((item) => deepClone(item)) as unknown as T
  }

  // 处理日期对象
  if (source instanceof Date) {
    return new Date(source) as unknown as T
  }

  // 处理正则对象
  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags) as unknown as T
  }

  // 处理Map对象
  if (source instanceof Map) {
    const clonedMap = new Map()
    ;(source as Map<unknown, unknown>).forEach((value, key) => {
      clonedMap.set(key, deepClone(value))
    })
    return clonedMap as unknown as T
  }

  // 处理Set对象
  if (source instanceof Set) {
    const clonedSet = new Set()
    ;(source as Set<unknown>).forEach((value) => {
      clonedSet.add(deepClone(value))
    })
    return clonedSet as unknown as T
  }

  // 处理普通对象
  if (Object.prototype.toString.call(source) === '[object Object]') {
    const sourceObj = source as Record<string, unknown>
    const clonedObj = {} as Record<string, unknown>

    Object.keys(sourceObj).forEach((key) => {
      clonedObj[key] = deepClone(sourceObj[key])
    })

    return clonedObj as unknown as T
  }

  // 其他对象类型（如自定义类实例）返回引用
  return source
}
export default {
  shallowClone,
  deepClone,
}
