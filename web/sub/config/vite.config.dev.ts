import { defineConfig, mergeConfig } from 'vite'
// import eslint from 'vite-plugin-eslint'
import baseConfig from './vite.config.base'

const devConfig = mergeConfig(
  {
    mode: 'development',
    server: {
      port: 3002,
      proxy: {
        '/login': 'http://localhost:3838',
        '/api': 'http://localhost:3838'
      }
    },
    plugins: [
      // // 这里不用eslint插件，放到最外层的 turbo 中使用
      // eslint({
      //   cache: false,
      //   include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      //   exclude: ['node_modules']
      // })
    ]
  },
  baseConfig
)

export default defineConfig(devConfig)
