import type { RouteRecordRaw } from 'vue-router'

const SUBAPP: RouteRecordRaw = {
  path: '/sub-app/:projectName/:page*',
  name: 'sub-app',
  component: () => import('@/views/sub-app/index.vue')
}

export default SUBAPP
