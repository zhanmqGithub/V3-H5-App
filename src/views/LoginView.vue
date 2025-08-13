<template>
  <h1>Login</h1>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const userStore = useUserStore()
router.replace({
  path: userStore.tabBarActive,
})
</script>
