import { createApp } from 'vue'
import App from './App.vue'

import store from './store'

// 路由
import router from './router'

// 样式
import '@/assets/style/global.less'

// arco
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'

import FlowerUI from 'jupiter-ui'
// import '@flowerofmycountry/ui/dist/style.css'

import '@/api/interceptor'

import WujieVue from 'wujie-vue3'

const app = createApp(App)

app
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .use(FlowerUI)
  .use(router)
  .use(store)
  .use(WujieVue)
app.mount('#app')
