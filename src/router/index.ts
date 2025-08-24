import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LoginView from '@/views/LoginView.vue'
/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login-view',
      name: 'index-view',
    },
    {
      path: '/app-plus',
      name: 'app-plus',
      // route level code-splitting
      // this generates a separate chunk (AppPlus.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AppPlus.vue'),
      meta: {
        title: '原生安卓',
        showTabBar: true,
        hasNavBar: false,
      },
    },
    {
      path: '/home-view',
      name: 'home-view',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: '主页',
        showTabBar: true,
        hasNavBar: false,
      },
    },
    {
      path: '/user-view',
      name: 'user-view',
      component: () => import('@/views/UserView.vue'),
      meta: {
        title: '我的',
        showTabBar: true,
        hasNavBar: true,
      },
    },
    // 以下为非TabBar页面
    {
      path: '/login-view',
      name: 'login-view',
      component: LoginView,
      meta: {
        title: '登录',
        showTabBar: false,
        hasNavBar: false,
      },
    },
    {
      path: '/plus-api',
      name: 'plus-api',
      component: () => import('@/views/pages/plus-api/PlusApi.vue'),
      meta: {
        title: '原生Api',
        showTabBar: false,
        hasNavBar: true,
      },
    },
    {
      path: '/about-app',
      name: 'about-app',
      component: () => import('@/views/pages/AboutApp.vue'),
      meta: {
        title: '关于App',
        showTabBar: false,
        hasNavBar: false,
      },
    },
  ],
})

/**
 * 路由白名单
 */
const unauthorizedRoutes: Set<string> = new Set()
unauthorizedRoutes.add('/login-view') // 登录页

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  console.log('beforeEach  ', from.path, '     --->     ', to.path)
  if (unauthorizedRoutes.has(to.path)) {
    next()
  } else {
    if (userStore.$state.token) {
      next()
    } else {
      router.replace({
        path: '/login-view',
      })
    }
  }
})

export default router
