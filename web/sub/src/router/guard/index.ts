import type { Router } from 'vue-router'
import { setRouteEmitter } from '@jupiter/shared'
import setupUserLoginInfoGuard from './userLoginInfo'
// import setupPermissionGuard from './permission'
import NProgress from 'nprogress' // progress bar

function setupPageGuard(router: Router) {
  router.beforeEach(async to => {
    // emit route change
    setRouteEmitter(to)
    console.log('子应用跳转：', to)
    NProgress.done()
  })
}

export default function createRouteGuard(router: Router) {
  setupUserLoginInfoGuard(router)
  setupPageGuard(router)
  // setupPermissionGuard(router)
}
