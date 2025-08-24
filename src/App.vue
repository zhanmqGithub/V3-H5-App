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
import { preventZoom, onPlusready } from './utils/document-utils'
// 阻止缩放
preventZoom()
/**
 * 获取路由实例
 */
const router = useRouter()
/**
 * 获取当前路由实例
 */
const route = useRoute()
/**
 * 用户全局存储
 */
const userStore = useUserStore()
router.replace(userStore.tabBarActive)
const statusbarHeight = ref<number>(0)
// plus对象准备
/**
 * 记录返回按钮触发时间
 */
let backbuttonTriggerTime: number = 0
onPlusready(() => {
  plus.navigator.setStatusBarStyle('dark')
  statusbarHeight.value = plus.navigator.getStatusbarHeight()
  plus.key.addEventListener('backbutton', (e) => {
    console.log('backbutton', e.keyCode)
    //TabBar页面1秒内连续触发2次即退出App
    if (route.meta.showTabBar) {
      const currentTriggerTime = new Date().getTime()
      if (backbuttonTriggerTime && currentTriggerTime - backbuttonTriggerTime < 1000 * 2) {
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
 * varlet 全局样式变量
 */
const varletGlobalStyleVars = ref({
  '--bottom-navigation-height': '3.75rem', // tabbar高度
  '--app-bar-title-font-size': '1.25rem', // 导航栏字体大小
  '--app-bar-height': '3rem', // 导航栏高度
  '--button-border-radius': '1rem', // 按钮 圆角
  '--button-mini-height': '1.5rem', // mini 按钮
  '--button-small-height': '2rem', // small 按钮
  '--button-normal-height': '2.5rem', // normal 按钮
  '--button-large-height': '3rem', // large 按钮
  '--field-decorator-line-border-radius': '1rem', // 表单字段外边框圆角
  '--tabs-item-horizontal-height': '3rem', // tabs高度
  '--tabs-indicator-size': '0.2rem', // tabs指示器粗细
  '--tabs-indicator-border-radius': '0.1rem', // tabs指示器圆角
  '--tabs-indicator-inner-size': '4rem', // tabs指示器宽度
  '--tab-active-font-weight': '700', // 激活的tab字重
  '--card-border-radius': '1rem', // 卡片圆角
})
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
    label: '原生',
    name: 'app-plus',
    icon: 'checkbox-marked-circle',
  },
  {
    label: '主页',
    name: 'home-view',
    icon: 'home',
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

const hasNavBar = computed<boolean>((): boolean => {
  return route.meta.hasNavBar as boolean
})
/**
 * 缓存的路由
 */
const keepAliveRouters = ref<string[]>(['home-view'])
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
    <!-- 状态栏占位补丁 ************************************************** -->
    <div
      :style="{
        width: '100%',
        height: `${statusbarHeight}px`,
        paddingTop: hasNavBar ? '3rem' : '0',
        // zIndex: 1,
        boxSizing: 'content-box',
      }"
    ></div>
    <!-- ************************************************** -->
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
      active-color="#000000"
      inactive-color="#AAAAAA"
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
  padding: 0.375rem;
  border-radius: 1.2rem;
}
/* 给激活的AppBar字体加粗 */
:deep(.var-bottom-navigation-item--active) {
  font-weight: 700;
  background-color: #f4f4f4;
}
</style>
