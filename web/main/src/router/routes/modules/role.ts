import type { RouteRecordRaw } from 'vue-router'

const ROLE: RouteRecordRaw = {
  path: '/role',
  name: 'role',
  component: () => import('@/views/role/index.vue')
}

export default ROLE
