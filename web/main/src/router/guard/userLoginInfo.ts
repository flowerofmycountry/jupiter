import type { Router, LocationQueryRaw } from 'vue-router'
import NProgress from 'nprogress' // progress bar

import { useUserStore } from '@/store'
import { isLogin } from 'jupiter-shared'

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async to => {
    NProgress.start()
    const userStore = useUserStore()
    if (isLogin()) {
      // 有没有取到项目的信息
      if (userStore.projects) {
        return true
      } else {
        try {
          await userStore.info()
          return true
        } catch (error) {
          await userStore.logout()
          return {
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query
            } as LocationQueryRaw
          }
        }
      }
    } else {
      if (to.name === 'login') {
        return true
      }
      return {
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query
        } as LocationQueryRaw
      }
    }
  })
}
