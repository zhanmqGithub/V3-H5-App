<script lang="ts" setup>
import { reactive } from 'vue'
import MenuList from '@/views/components/MenuList.vue'
defineOptions({
  name: 'storeroom-view',
})

const menuList = reactive<Menu[]>([
  {
    title: '试验设备工具借用',
    name: '/storeroom-view/action-form',
    icon: new URL('/src/assets/images/page/storeroom/KFSBGJJY.png', import.meta.url).href,
    enabled: false,
    query: {
      operationType: 'KFSBGJJY',
    },
  },
  {
    title: '试验设备工具归还',
    name: '/storeroom-view/action-form',
    icon: new URL('/src/assets/images/page/storeroom/KFSBGJGH.png', import.meta.url).href,
    enabled: false,
    query: {
      operationType: 'KFSBGJGH',
    },
  },
  {
    title: '试验设备工具转借',
    name: '/storeroom-view/action-form',
    icon: new URL('/src/assets/images/page/storeroom/KFSBGJZJ.png', import.meta.url).href,
    enabled: false,
    query: {
      operationType: 'KFSBGJZJ',
    },
  },
  {
    title: '试验耗材领用',
    name: '/storeroom-view/action-form',
    icon: new URL('/src/assets/images/page/storeroom/KFHCLY.png', import.meta.url).href,
    enabled: false,
    query: {
      operationType: 'KFHCLY',
    },
  },
  {
    title: '试验耗材归还',
    name: '/storeroom-view/action-form',
    icon: new URL('/src/assets/images/page/storeroom/KFHCGH.png', import.meta.url).href,
    enabled: false,
    query: {
      operationType: 'KFHCGH',
    },
  },
])
</script>

<template>
  <div>
    <NavBar title="库房" :back="false">
      <template #right>
        <var-menu>
          <var-icon name="dots-vertical" color="#000000" size="24" />
          <template #menu>
            <var-cell ripple>选项卡</var-cell>
            <var-cell ripple>选项卡</var-cell>
            <var-cell ripple>选项卡</var-cell>
          </template>
        </var-menu>
      </template>
    </NavBar>
    <MenuList :menuList="menuList"></MenuList>
  </div>
</template>
