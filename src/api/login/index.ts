import { getRequest, postRequest } from '@/utils/http-utils'
/**
 * Api接口
 */
enum Api {
  randomImage = '/sys/randomImage',
  login = '/sys/login',
  logout = '/sys/logout',
}

/**
 * 生成验证码
 * @param checkKey 时间戳
 * @returns
 */
export const randomImage = (checkKey: string) => {
  return getRequest<string>(`${Api.randomImage}/${checkKey}?_t=${new Date().getTime()}`)
}

/**
 * 登陆参数
 */
export interface LoginParam {
  captcha: string
  checkKey: string
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

/**
 * 退出登录
 * @returns
 */
export const logout = () => {
  return getRequest<string>(`${Api.logout}?_t=${new Date().getTime()}`)
}
