import type { RouteRecordRaw } from 'vue-router'

const CHOOSEICON: RouteRecordRaw = {
  path: '/choose-icon',
  name: 'choose-icon',
  component: () => import('@/views/choose-icon/index.vue'),
  meta: {
    locale: '图标选择器',
    icon: 'icon-home',
    order: 0
  }
}

export default CHOOSEICON
