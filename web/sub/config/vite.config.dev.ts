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
