<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
/**
 * 菜单
 */
interface Menu {
  title: string
  name: string
  icon: string
  enabled: false
  query: QueryObject
}

/**
 * 菜单列表项
 */
interface MenuListItem {
  title: string
  children: Array<Menu>
}

defineOptions({
  name: 'app-plus',
})

const router = useRouter()
const handleGoTo = (path: string, query: QueryObject) => {
  router.push({
    path,
    query,
  })
}
const menuList = reactive<MenuListItem[]>([
  {
    title: 'API Reference',
    children: [
      {
        title: '加速度传感器',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/accelerometer.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '加速度传感器',
          type: 'accelerometer',
        },
      },
      {
        title: '广告',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/ad.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '广告',
          type: 'ad',
        },
      },
      {
        title: '音频',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/audio.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '音频',
          type: 'audio',
        },
      },
      {
        title: '条码',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/barcode.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '条码',
          type: 'barcode',
        },
      },
      {
        title: '蓝牙',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/bluetooth.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '蓝牙',
          type: 'bluetooth',
        },
      },
      {
        title: '相机',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/camera.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '相机',
          type: 'camera',
        },
      },
      {
        title: '通讯录',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/contacts.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '通讯录',
          type: 'contacts',
        },
      },
      {
        title: '设备',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/device.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '设备',
          type: 'device',
        },
      },
      {
        title: '下载',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/downloader.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '下载',
          type: 'downloader',
        },
      },
      {
        title: '事件',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/events.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '事件',
          type: 'events',
        },
      },
      {
        title: '指纹',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/fingerprint.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '指纹',
          type: 'fingerprint',
        },
      },
      {
        title: '相册',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/gallery.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '相册',
          type: 'gallery',
        },
      },
      {
        title: '位置信息',
        name: 'plus-api',
        icon: new URL('/src/assets/images/page/plus-api/geolocation.png', import.meta.url).href,
        enabled: false,
        query: {
          title: '位置信息',
          type: 'geolocation',
        },
      },
    ],
  },
  {
    title: 'Native.js',
    children: [],
  },
])
</script>

<template>
  <div>
    <template v-for="(menuItem, index) of menuList" :key="index">
      <var-divider :description="menuItem.title" class="pl-4 pr-4 pt-3" />
      <div class="w-full pl-3 pr-3">
        <var-paper :elevation="false" :radius="16">
          <var-list>
            <var-cell
              v-for="menu in menuItem.children"
              :key="menu.name"
              ripple
              :icon="menu.icon"
              @click="handleGoTo(menu.name, menu.query)"
              class="bg-white"
            >
              <span class="font-size-4 font-semibold ml-2">{{ menu.title }}</span>
              <template #icon>
                <var-icon :name="menu.icon" :size="36" />
              </template>
              <template #extra><var-icon name="chevron-right" color="#BBB" :size="24" /> </template>
            </var-cell>
          </var-list>
        </var-paper>
      </div>
    </template>
  </div>
</template>
