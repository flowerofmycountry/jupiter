import type { RouteRecordRaw } from 'vue-router'

const USER: RouteRecordRaw = {
  path: '/user',
  name: 'user',
  component: () => import('@/views/user/index.vue')
}

export default USER
