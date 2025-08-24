<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const versionCode = ref<number>(0)
const version = ref<string>('')
const appid = ref<string>('')
const startupTime = ref<string>('')
if (window.plus) {
  console.log(' App ----------> onPlusready', plus, plus.runtime)
  versionCode.value = plus.runtime.versionCode
  version.value = plus.runtime.version as string
  appid.value = plus.runtime.appid as string
  startupTime.value = dayjs(Number(plus.runtime.startupTime)).format('YYYY年MM月DD日 HH时mm分ss秒')
}
</script>

<template>
  <div class="p-2">
    <var-card title="App信息">
      <template #description>
        <var-divider dashed />
        <var-cell title="App版本名称" border>
          <template #description>
            {{ version }}
          </template>
        </var-cell>
        <var-cell title="App版本号" border>
          <template #description>
            {{ versionCode }}
          </template>
        </var-cell>
        <var-cell title="App ID" border>
          <template #description>
            {{ appid }}
          </template>
        </var-cell>
        <var-cell title="启动时间" border>
          <template #description>
            {{ startupTime }}
          </template>
        </var-cell>
      </template>
    </var-card>
  </div>
</template>
