import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      '/login': 'http://localhost:3838',
      '/api': 'http://localhost:3838'
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js' // compile template
      }
    ]
  }
})
