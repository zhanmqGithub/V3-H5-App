<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { z } from 'zod'
import { randomImage, login } from '@/api/login'
import type { LoginParam } from '@/api/login'
import { Form } from '@varlet/ui'
const router = useRouter()
const userStore = useUserStore()
const appName = computed<string>(() => {
  return import.meta.env.VITE_APP_NAME || ''
})
router.replace({ path: userStore.tabBarActive })
const form = ref<Form>()
const isViewPassword = ref(false)
const account = reactive<LoginParam>({
  username: 'jeecg',
  password: 'jeecg#123456',
  captcha: '',
  checkKey: new Date().getTime(),
})
async function handleLogin() {
  const valid = await form.value?.validate()
  if (!valid) {
    return
  }
  try {
    const loginRes = await login({
      username: account.username,
      password: account.password,
      captcha: account.captcha,
      checkKey: account.checkKey,
    })
    userStore.setToken(loginRes.token)
    userStore.setUserInfo(loginRes.userInfo)
    userStore.setDeparts(loginRes.departs)
    router.replace({ path: userStore.tabBarActive })
  } catch (error) {
    console.log('error', error)
    handleRandomImage()
  }
}
const verificationCode = ref<string>(
  new URL('/src/assets/images/page/login/404.png', import.meta.url).href,
)

const handleRandomImage = async (): Promise<void> => {
  account.checkKey = new Date().getTime()
  verificationCode.value = await randomImage(account.checkKey)
}
handleRandomImage()
</script>
<template>
  <div class="flex flex-col justify-center items-center p-4">
    <var-image
      src="/src/assets/images/logo.png"
      width="4rem"
      height="4rem"
      radius="1rem"
      class="mt-4 mb-4 bg-white"
    />
    <h2 class="font-size-6 font-700 mb-4 color-dark-200">{{ appName }}</h2>

    <var-form ref="form" class="sign-in-form">
      <var-space direction="column" :size="['8vmin', 0]">
        <var-input
          v-model="account.username"
          variant="outlined"
          placeholder="请输入账户"
          :rules="z.string().min(1, '账户不能为空！')"
        >
          <template #prepend-icon>
            <var-icon name="account-circle" class="mr-2" />
          </template>
        </var-input>
        <var-input
          v-model="account.password"
          variant="outlined"
          placeholder="请输入密码"
          :rules="z.string().min(1, '密码不能为空！')"
          :type="isViewPassword ? 'text' : 'password'"
        >
          <template #prepend-icon>
            <var-icon name="lock" class="mr-2" />
          </template>
          <template #append-icon>
            <var-icon
              :name="isViewPassword ? 'view' : 'view-outline'"
              @click="isViewPassword = !isViewPassword"
            />
          </template>
        </var-input>
        <var-space :wrap="false">
          <var-input
            v-model="account.captcha"
            variant="outlined"
            placeholder="请输入验证码"
            :rules="z.string().length(4, '长度必须为4！')"
          >
            <template #prepend-icon>
              <var-icon name="checkbox-marked" class="mr-2" />
            </template>
          </var-input>
          <var-image
            :src="verificationCode"
            width="9rem"
            height="3rem"
            radius="0.5rem"
            class="mt-1"
            @click="handleRandomImage"
          />
        </var-space>

        <var-button type="primary" block size="large" auto-loading @click="handleLogin">
          登录
        </var-button>
      </var-space>
    </var-form>
  </div>
</template>
<style lang="less" scoped></style>
