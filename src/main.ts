/**
 * 导入全局css
 */
import './assets/main.css'
/**
 * 导入项目创建工具
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Pinia 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入unocss
import 'virtual:uno.css'
// 导入varlet样式
import '@varlet/ui/es/style'
/**
 * 导入自定义全局组件
 */
import NavBar from '@/views/components/NavBar.vue'
import eruda from 'eruda'
/**
 * 非生产环境开启 eruda （控制台工具）
 */
if (import.meta.env.VITE_CONSOLE_WINDOW === 'true') {
  console.log('import.meta ', import.meta)
  eruda.init({
    useShadowDom: true,
    defaults: {
      theme: 'dark',
    },
  })
}
const app = createApp(App)
/**
 * 创建pinia实例
 */
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.component('NavBar', NavBar)

app.mount('#app')
