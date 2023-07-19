import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { appRoutes } from './routes'
import createRouteGuard from './guard'

export default () => {
  const router = createRouter({
    history: createWebHistory('/sub-app/template'),
    routes: [
      {
        name: 'root',
        path: '/',
        component: Layout,
        children: [...appRoutes],
        redirect: {
          name: 'crud'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
      }
    ]
  })

  createRouteGuard(router)
  return router
}

// export default router
