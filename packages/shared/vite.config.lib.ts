import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

console.log(__dirname)

export default defineConfig({
  plugins: [
    dts({
      entryRoot: __dirname
    })
  ],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts')
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        '@arco-design/web-vue/es/icon',
        /node_modules/
      ],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: 'dist'
        }
      ]
    }
  }
})
