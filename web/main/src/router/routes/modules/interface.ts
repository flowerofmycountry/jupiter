import type { RouteRecordRaw } from 'vue-router'

const INTERFACE: RouteRecordRaw = {
  path: '/interface',
  name: 'interface',
  component: () => import('@/views/interface/index.vue')
}

export default INTERFACE
