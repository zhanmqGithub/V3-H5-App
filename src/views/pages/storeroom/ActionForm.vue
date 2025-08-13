<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/**
 * 页面标题Map
 */
const PageTitleMap = new Map<string, string>([
  ['KFSBGJJY', '试验设备工具借用'],
  ['KFSBGJGH', '试验设备工具归还'],
  ['KFSBGJZJ', '试验设备工具转借'],
  ['KFHCLY', '试验耗材领用'],
  ['KFHCGH', '试验耗材归还'],
])
const route = useRoute()
defineOptions({
  name: 'storeroom-view-action-form',
})
/**
 * 当前标题
 */
const pageTitle = computed(() => {
  const { operationType } = route.query
  return PageTitleMap.get(operationType as string)
})
</script>
<template>
  <div>
    <NavBar :title="pageTitle"></NavBar>
    <h1>ActionForm</h1>
  </div>
</template>
