import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import configArcoStyleImportPlugin from './plugin/arcoStyleImport'

export default {
  plugins: [vue(), vueJsx(), configArcoStyleImportPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js' // compile template
      }
    ]
  }
}
