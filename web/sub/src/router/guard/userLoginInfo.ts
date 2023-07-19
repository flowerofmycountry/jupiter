import type { Router, LocationQueryRaw } from 'vue-router'
import NProgress from 'nprogress' // progress bar

import { isLogin } from '@jupiter/shared'

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async to => {
    NProgress.start()
    if (isLogin()) {
      return true
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
