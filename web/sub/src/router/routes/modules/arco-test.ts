import type { RouteRecordRaw } from 'vue-router'

const CHOOSEICON: RouteRecordRaw = {
  path: '/arco-test',
  name: 'arco-test',
  meta: {
    locale: 'arco&无界微前端',
    icon: 'icon-home',
    order: 2
  },
  children: [
    {
      path: '/arco-test/popup',
      name: 'popup',
      component: () => import('@/views/arco-test/popup/index.vue'),
      meta: {
        locale: '气泡类',
        icon: 'icon-home',
        order: 1
      }
    },
    {
      path: '/arco-test/message',
      name: 'message',
      component: () => import('@/views/arco-test/message/index.vue'),
      meta: {
        locale: '通知类',
        icon: 'icon-home',
        order: 0
      }
    },
    {
      path: '/arco-test/form-item',
      name: 'form-item',
      component: () => import('@/views/arco-test/form-item/index.vue'),
      meta: {
        locale: '表单类',
        icon: 'icon-home',
        order: 0
      }
    },
    {
      path: '/arco-test/modal',
      name: 'modal',
      component: () => import('@/views/arco-test/modal/index.vue'),
      meta: {
        locale: '弹窗类',
        icon: 'icon-home',
        order: 0
      }
    }
  ]
}

export default CHOOSEICON
