/**
 * 用户全局存储
 */
interface UserStoreState {
  token: string
  userInfo: UserInfo | Record<string, unknown>
  tabBarActive: string
  departs: Depart[]
}
