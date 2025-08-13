<script setup lang="ts">
import {
  reactive,
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { Snackbar } from '@varlet/ui'
import { preventZoom } from '@/utils/document-utils'
preventZoom()
/**
 * 获取路由实例
 */
const router = useRouter()
/**
 * 记录返回按钮触发时间
 */
let backbuttonTriggerTime: number = new Date().getTime()
document.addEventListener('plusready', () => {
  plus.navigator.setStatusBarStyle('dark')
  plus.navigator.setStatusBarBackground('#FFFFFF')
  // 监听返回键事件
  plus.key.addEventListener('backbutton', (e) => {
    console.log('backbutton', e)
    //TabBar页面1秒内连续触发2次即退出App
    if (route.meta.showTabBar) {
      const currentTriggerTime = new Date().getTime()
      if (currentTriggerTime - backbuttonTriggerTime < 1000 * 2) {
        plus.runtime.quit()
      } else {
        backbuttonTriggerTime = currentTriggerTime
        Snackbar.warning('再次返回即可关闭当前应用')
      }
    } else {
      router.go(-1)
    }
  })
})

/**
 * 获取当前路由实例
 */
const route = useRoute()
/**
 * varlet 全局样式变量
 */
const varletGlobalStyleVars = ref({
  '--bottom-navigation-item-active-background-color': '#ebf1fa',
  '--bottom-navigation-background-color': '#ffffff',
  '--bottom-navigation-height': '3.75rem',
  '--app-bar-title-font-size': '1.25rem',
  '--app-bar-height': '3rem',
  '--button-border-radius': '1rem',
  '--button-mini-height': '1.5rem',
  '--button-small-height': '2rem',
  '--button-normal-height': '2.5rem',
  '--button-large-height': '3rem',
  '--divider-color': '#f4f5fa',
  '--table-thead-th-text-align': 'center',
  '--table-tbody-td-text-align': 'center',
})
/**
 * 用户全局存储
 */
const userStore = useUserStore()
/**
 * TabBar 激活项 切换时间
 * @param active
 */
const handleChangeTabBar = async (active: number | string) => {
  await router.replace(active as string)
  userStore.setTabBarActive(active as string)
}

/**
 * TabBar 列表
 */
const TabBarList = reactive<TabBarItem[]>([
  {
    label: '待办',
    name: 'todo-view',
    icon: 'checkbox-marked-circle-outline',
  },
  {
    label: '订单',
    name: 'order-view',
    icon: 'format-list-checkbox',
  },
  {
    label: '库房',
    name: 'storeroom-view',
    icon: 'home-outline',
  },
  {
    label: '排程',
    name: 'schedule-view',
    icon: 'calendar-month',
  },
  {
    label: '我的',
    name: 'user-view',
    icon: 'account-circle',
  },
])
/**
 * 显示底部导航栏
 */
const showTabBar = computed<boolean>((): boolean => {
  return route.meta.showTabBar as boolean
})
/**
 * 缓存的路由
 */
const keepAliveRouters = ref<string[]>(['storeroom-view'])
onBeforeMount(() => {
  console.log(' App ----------> onBeforeMount')
})
onMounted(() => {
  console.log(' App ----------> onMounted')
})
onBeforeUpdate(() => {
  console.log(' App ----------> onBeforeUpdate')
})
onUpdated(() => {
  console.log(' App ----------> onUpdated')
})
onBeforeUnmount(() => {
  console.log(' App ----------> onBeforeUnmount')
})
onUnmounted(() => {
  console.log(' App ----------> onUnmounted')
})
</script>

<template>
  <var-style-provider :style-vars="varletGlobalStyleVars">
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="keepAliveRouters">
        <component :key="route.name" :is="Component" class="router-view" />
      </KeepAlive>
    </RouterView>
    <var-bottom-navigation
      v-if="showTabBar"
      round
      fixed
      placeholder
      active-color="#3673c8"
      inactive-color="#98a1ac"
      v-model:active="userStore.tabBarActive"
      @change="handleChangeTabBar"
    >
      <var-bottom-navigation-item
        v-for="tab of TabBarList"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
        :icon="tab.icon"
      />
    </var-bottom-navigation>
  </var-style-provider>
</template>

<style scoped>
/* 给AppBar高度和外边距 */
:deep(.var-bottom-navigation-item) {
  height: max-content;
  margin: 0.25rem;
  padding: 0.25rem;
  border-radius: 1.2rem;
}
/* 给激活的AppBar字体加粗 */
:deep(.var-bottom-navigation-item--active) {
  font-weight: 700;
}
</style>
