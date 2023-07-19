import type { RouteRecordRaw } from 'vue-router'

// 首页永远展示
const HOME: RouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    locale: '首页',
    icon: 'icon-home',
    order: 0
  }
}

export default HOME
