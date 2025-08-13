/**
 * 用户全局存储
 */
interface UserStoreState {
  token: string
  userInfo: UserInfo
  roles: string[]
  tabBarActive: string
}
