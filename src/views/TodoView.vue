<script lang="ts" setup>
import { reactive } from 'vue'
import MenuList from '@/views/components/MenuList.vue'
defineOptions({
  name: 'todo-view',
})
const menuList = reactive<Menu[]>([
  {
    title: '排程待办',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/schedule.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
  {
    title: '库房待办',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/storeroom.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
  {
    title: '拆解任务待办',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/disassembly.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
  {
    title: '消息',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/message.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
  {
    title: '接收样车',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/sample_car.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
  {
    title: '接收退样',
    name: 'storeroom-form',
    icon: new URL('/src/assets/images/page/todo/return_sample.png', import.meta.url).href,
    enabled: false,
    query: {},
  },
])
</script>

<template>
  <div>
    <NavBar title="待办" :back="false"></NavBar>
    <MenuList :menuList="menuList"></MenuList>
  </div>
</template>
