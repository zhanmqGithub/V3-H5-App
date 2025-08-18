<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { logout } from '@/api/login/index'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { Snackbar, Dialog } from '@varlet/ui'
const router = useRouter()
const userStore = useUserStore()
const handleLogout = () => {
  Dialog({
    title: '提示',
    message: '请确认是否退出登录？',
    onConfirm: async () => {
      try {
        const res = await logout()
        Snackbar.success(res)
        userStore.clearUser()
        router.replace({
          path: '/login-view',
        })
      } catch (error) {
        console.log('error', error)
      }
    },
  })
}
const userInfo = computed<UserInfo>(() => {
  return userStore.userInfo
})

const basicInfoKeys = reactive<
  {
    title: string
    field: keyof UserInfo
  }[]
>([
  {
    title: '账号',
    field: 'username',
  },
  {
    title: '工号',
    field: 'workNo',
  },
  {
    title: '手机号',
    field: 'phone',
  },
  {
    title: '邮箱',
    field: 'email',
  },
  {
    title: '单位',
    field: 'orgCode',
  },
])
</script>
<template>
  <div>
    <NavBar title="我的" :back="false"></NavBar>
    <div class="p-2">
      <div class="flex justify-between items-center mt-4 mb-4">
        <div class="flex justify-between items-center">
          <var-avatar :src="userInfo.avatar" :size="80" />
          <div class="ml-4">
            <div class="font-size-4 font-700">{{ userInfo.realname }}</div>
            <div>
              <var-chip type="primary" size="small" color="#3673c8">
                {{ userInfo.postText || '暂无职位' }}
              </var-chip>
            </div>
          </div>
        </div>
        <var-button text type="primary" text-color="#3673c8" size="large">修改头像</var-button>
      </div>
      <var-paper :elevation="false" :radius="16" class="w-full pt-4 pr-4 pb-2 pl-4">
        <template v-for="key in basicInfoKeys" :key="key.field">
          <div class="flex justify-between items-center pt-1 pb-1">
            <span class="font-size-4 color-gray">{{ key.title }}</span>
            <span class="font-size-4 color-black">{{ userInfo[key.field] }}</span>
          </div>
          <var-divider dashed />
        </template>
      </var-paper>
      <var-button text text-color="#3673c8" size="large" class="w-full mt-4" @click="handleLogout">
        退出登录
      </var-button>
    </div>
  </div>
</template>
