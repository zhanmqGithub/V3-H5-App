<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  title: { type: String, required: true, default: '标题' },
  back: { type: Boolean, required: false, default: true },
})
const goBackIcon = new URL('/src/assets/images/components/nav-bar/back.png', import.meta.url).href
const handleGoBack = () => {
  router.go(-1)
}
</script>
<template>
  <var-app-bar
    fixed
    title-position="center"
    placeholder
    safe-area-top
    :elevation="false"
    color="#fff"
    text-color="#333"
    z-index="9"
  >
    <template #left>
      <var-button v-if="props.back" color="transparent" round text @click="handleGoBack">
        <var-icon :name="goBackIcon" :size="20" />
      </var-button>
    </template>
    <template #default>
      <span class="font-size-1.2rem font-700 color-dark-200">{{ props.title }}</span>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </var-app-bar>
</template>
