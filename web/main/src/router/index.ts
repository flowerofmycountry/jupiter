import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { NOT_FOUND_ROUTE } from './routes/base'
import { appRoutes } from './routes'
import createRouteGuard from './guard'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory('/main-app'),
  routes: [
    {
      name: 'root',
      path: '/',
      component: Layout,
      children: [...appRoutes],
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    NOT_FOUND_ROUTE
  ]
})

createRouteGuard(router)

router.onError(err => {
  console.log(err, '路由错误')
})

export default router
