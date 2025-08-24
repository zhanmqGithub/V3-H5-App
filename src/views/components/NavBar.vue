<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  title: { type: String, required: false, default: '' },
  back: { type: Boolean, required: false, default: true },
  more: { type: Boolean, required: false, default: true },
  fixed: { type: Boolean, required: false, default: true },
})
const goBackIcon = new URL('/src/assets/images/components/nav-bar/back.png', import.meta.url).href
const handleGoBack = (): void => {
  router.go(-1)
}
const statusbarHeight = ref<number>(0)
if (window.plus) {
  statusbarHeight.value = plus.navigator.getStatusbarHeight()
}
</script>
<template>
  <div>
    <!-- 状态栏占位补丁 ************************************************** -->
    <div
      :style="{
        width: '100%',
        height: `${statusbarHeight}px`,
        zIndex: 9,
        backgroundColor: '#f4f4f4',
        position: 'fixed',
        top: 0,
      }"
    ></div>
    <!-- ************************************************** -->
    <var-app-bar
      :style="{ marginTop: `${statusbarHeight}px` }"
      title-position="left"
      :fixed="props.fixed"
      safe-area-top
      :elevation="false"
      color="#F4F4F4"
      z-index="9"
    >
      <template #left>
        <var-button v-if="props.back" color="transparent" round text @click="handleGoBack">
          <var-icon :name="goBackIcon" :size="20" />
        </var-button>
      </template>
      <template #default>
        <span class="font-size-1.2rem font-700 color-dark-200">
          <span class="ml-2">{{ props.title }}</span>
        </span>
      </template>
      <template #right>
        <slot v-if="props.more" name="right"></slot>
      </template>
    </var-app-bar>
  </div>
</template>
