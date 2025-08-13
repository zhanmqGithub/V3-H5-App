import { defineStore } from 'pinia'
export const useUserStore = defineStore('user-store', {
  state: (): UserStoreState => ({
    token: '',
    userInfo: {
      name: '',
      age: 0,
    },
    roles: [],
    tabBarActive: 'storeroom-view',
  }),
  getters: {
    isLogin: (state: UserStoreState) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    clearUser() {
      this.token = ''
      this.userInfo = { name: '', age: 0 }
      this.roles = []
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
