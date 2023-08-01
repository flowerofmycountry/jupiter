import type { RouteRecordRaw } from 'vue-router'

const MENU: RouteRecordRaw = {
  path: '/menu',
  name: 'menu',
  component: () => import('@/views/menu/index.vue')
}

export default MENU
