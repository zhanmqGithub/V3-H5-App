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
import VConsole from 'vconsole'
/**
 * 非生产环境开启 VConsole
 */
if (import.meta.env.VITE_VCONSOLE === 'true') {
  new VConsole({ theme: 'dark' })
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
