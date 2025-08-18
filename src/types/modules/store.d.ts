/**
 * 用户全局存储
 */
interface UserStore {
  token: string
  userInfo: Nullable<UserInfo>
  tabBarActive: string
  departs: Depart[]
}
