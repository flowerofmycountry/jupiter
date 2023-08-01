// @ts-nocheck
import type { RouteRecordRaw } from 'vue-router'

const CRUD: RouteRecordRaw = {
  path: '/crud',
  name: 'crud',
  component: () => import('@/views/crud/index.vue'),
  meta: {
    locale: '增删改查模板页',
    icon: 'icon-home',
    order: 0
  }
}

export default CRUD
