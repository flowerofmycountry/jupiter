import type { RouteRecordRaw } from 'vue-router'

const FFORM: RouteRecordRaw = {
  path: '/fform',
  name: 'fform',
  component: () => import('@/views/fform/index.vue'),
  meta: {
    locale: 'FForm表单测试',
    icon: 'icon-moban',
    order: 0
  }
}

export default FFORM
