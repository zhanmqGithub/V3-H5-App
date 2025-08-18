import { defineStore } from 'pinia'
export const useUserStore = defineStore('user-store', {
  state: (): UserStore => ({
    token: '',
    userInfo: {},
    tabBarActive: 'storeroom-view',
    departs: [],
  }),
  getters: {
    isLogin: (state: UserStore) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },
    setDeparts(departs: Depart[]) {
      this.departs = departs
    },
    clearUser() {
      this.token = ''
      this.userInfo = {}
      this.departs = []
    },
    setTabBarActive(active: string) {
      this.tabBarActive = active
    },
  },
  // 核心：开启持久化配置
  persist: {
    // 存储的 key，默认是 store 的 id（这里即 'user'）
    key: 'user-store',
    // 存储介质，可选 localStorage(默认),sessionStorage,cookie
    storage: localStorage,
  },
})
