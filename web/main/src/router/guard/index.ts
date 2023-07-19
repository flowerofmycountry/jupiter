import type { Router } from 'vue-router'
import NProgress from 'nprogress'
import { setRouteEmitter } from '@jupiter/shared'
import setupUserLoginInfoGuard from './userLoginInfo'
import setupPermissionGuard from './permission'

function setupPageGuard(router: Router) {
  router.beforeEach(async to => {
    // emit route change
    setRouteEmitter(to)
    NProgress.done()
  })
}

export default function createRouteGuard(router: Router) {
  setupUserLoginInfoGuard(router)
  setupPermissionGuard(router)
  setupPageGuard(router)
}
