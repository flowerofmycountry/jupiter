import type { RouteRecordRaw } from 'vue-router'

const MULTIMENU: RouteRecordRaw = {
  path: '/multi-menu',
  name: 'multi-menu',
  children: [
    {
      path: '/multi-menu/menu-page1',
      name: 'menu-page1',
      component: () => import('@/views/multi-menu/menu-page1/index.vue')
    },
    {
      path: '/multi-menu/menu-page2',
      name: 'menu-page2',
      component: () => import('@/views/multi-menu/menu-page2/index.vue')
    }
  ]
}

export default MULTIMENU
