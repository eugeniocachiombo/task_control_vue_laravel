import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@plugin': fileURLToPath(new URL('./plugin/', import.meta.url)),
      '@run_alert': fileURLToPath(new URL('./public/run_alert', import.meta.url))
    },
  },
})
