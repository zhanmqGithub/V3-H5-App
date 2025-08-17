import { getRequest, postRequest } from '@/utils/http-utils'
/**
 * Api接口
 */
enum Api {
  randomImage = '/sys/randomImage/',
  login = '/sys/login',
}

/**
 * 生成验证码
 * @param currentTime 时间戳
 * @returns
 */
export const randomImage = (currentTime: number) => {
  return getRequest<string>(`${Api.randomImage}${currentTime}`)
}

/**
 * 登陆参数
 */
export interface LoginParam {
  captcha: string
  checkKey: number
  password: string
  username: string
}
/**
 * 登录响应
 */
export interface LoginResult {
  departs: Depart[]
  multi_depart: number
  sysAllDictItems: SysAllDictItem[]
  tenantList: Tenant[]
  token: string
  userInfo: UserInfo
}

/**
 * 登录
 * @param loginParam
 * @returns
 */
export const login = (loginParam: LoginParam) => {
  return postRequest<LoginResult, LoginParam>(Api.login, loginParam)
}
