import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
// 使用UnoCSS
import UnoCSS from 'unocss/vite'
// 使用varlet自动导入
import components from 'unplugin-vue-components/vite'
import viteAutoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
// 使用构建分析
import { visualizer } from 'rollup-plugin-visualizer'
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    UnoCSS({
      configFile: './uno.config.ts',
    }),
    components({
      resolvers: [VarletImportResolver()],
    }),
    viteAutoImport({
      resolvers: [VarletImportResolver({ autoImport: true })],
      // imports: ['vue', 'vue-router'], // 自动导入 vue vue-router
      // dts: './src/types/auto-import.d.ts', // 针对ts生成自动导入包的全局类型文件
    }),
    visualizer({ open: false }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // target: ['chrome64', 'edge79', 'firefox67', 'safari11.1'],
    rollupOptions: {
      onwarn(warning, warn) {
        // 忽略eruda使用eval函数的警告
        if (warning.code === 'EVAL' && warning.id?.includes('eruda')) {
          return
        }
        warn(warning)
      },
    },
  },
})
