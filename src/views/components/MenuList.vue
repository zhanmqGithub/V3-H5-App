<script lang="ts" setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  menuList: { type: Array<Menu>, required: true, default: () => [] },
})
const router = useRouter()
const handleGoTo = (path: string, query: QueryObject) => {
  router.push({
    path,
    query,
  })
}
</script>
<template>
  <div class="w-full p-2">
    <var-paper :elevation="false" :radius="16">
      <var-cell
        v-for="menu in props.menuList"
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
    </var-paper>
  </div>
</template>
<style scoped></style>
