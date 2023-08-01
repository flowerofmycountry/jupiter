import { mergeConfig, defineConfig } from 'vite'
import baseConfig from './vite.config.base'
import configCompressPlugin from './plugin/compress'
import configArcoResolverPlugin from './plugin/arcoResolver'

const prodConfig = mergeConfig(
  {
    mode: 'production',
    plugins: [configCompressPlugin('gzip'), configArcoResolverPlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue', '@arco-design/web-vue/es/icon'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core']
          }
        }
      },
      chunkSizeWarningLimit: 500
    }
  },
  baseConfig
)

export default defineConfig(prodConfig)
