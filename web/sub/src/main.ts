import { createApp } from 'vue'
import directive from '@/directive'

import App from './App.vue'
import store from './store'

// 路由
import createRouter from './router'

// 样式
import '@/assets/style/global.less'

import '@/api/interceptor'

// import ArcoVue from '@arco-design/web-vue'
// import ArcoVueIcon from '@arco-design/web-vue/es/icon/arco-vue-icon'

if (window.__POWERED_BY_WUJIE__) {
  console.log('子应用 __POWERED_BY_WUJIE__')

  let instance: any
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
    // instance.use(ArcoVue)
    // instance.use(ArcoVueIcon)
    instance.use(directive)
    instance.use(createRouter()) // 一定要在这里创建路由实例
    instance.use(store)
    instance.mount('#app')
  }

  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  /*
      由于vite是异步加载，而无界可能采用fiber执行机制
      所以mount的调用时机无法确认，框架调用时可能vite
      还没有加载回来，这里采用主动调用防止用没有mount
      无界mount函数内置标记，不用担心重复mount
    */
  window.__WUJIE.mount()
} else {
  createApp(App)
    // .use(ArcoVue)
    // .use(ArcoVueIcon)
    .use(directive)
    .use(createRouter())
    .use(store)
    .mount('#app')
}
