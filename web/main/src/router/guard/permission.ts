import type { Router, RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
// import NProgress from 'nprogress' // progress bar

import usePermission from '@/hooks/permission'
import { useUserStore, useAppStore, useActiveSubStore } from '@/store'
import { appRoutes } from '../routes'
import { WHITE_LIST, NOT_FOUND, SUB_APP } from '../constants'
import { extractSubAppName } from '@/utils'

export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async to => {
    // 如果是 白名单 直接跳过
    if (WHITE_LIST.find(el => el.name === to.name)) {
      return true
    }

    const appStore = useAppStore()
    const userStore = useUserStore()

    // 从url中直接输入路由
    if (!appStore.appAsyncMenus) {
      const subAppName = to.params?.projectName
      const subProjectInfo = userStore.projects?.find(
        p => p.name === subAppName
      )

      if (subProjectInfo) {
        const activeSubStore = useActiveSubStore()
        activeSubStore.setInfo(subProjectInfo)
      }

      // 取菜单信息
      await appStore.fetchServerMenuConfig(subProjectInfo?.id)
    }

    return true

    // eslint-disable-next-line no-lonely-if
    // if (permissionsAllow) next()
    // else {
    //   const destination =
    //     Permission.findFirstPermissionRoute(appRoutes, userStore.role) ||
    //     NOT_FOUND
    //   next(destination)
    // }

    // if (appStore.menuFromServer) {
    //   // 针对来自服务端的菜单配置进行处理
    //   // Handle routing configuration from the server

    //   // 根据需要自行完善来源于服务端的菜单配置的permission逻辑
    //   // Refine the permission logic from the server's menu configuration as needed
    //   if (!appStore.appAsyncMenus.length && !WHITE_LIST.find((el) => el.name === to.name)) {
    //     await appStore.fetchServerMenuConfig()

    //     // 取完服务端 动态添加路由
    //     appStore.appAsyncMenus.forEach((element) => {
    //       router.addRoute('root', {
    //         ...element,
    //         component: () => import(`../../views/${element.name as string}/index.vue`),
    //       } as RouteRecordRaw)
    //     })

    //     // 添加完后 重新匹配路由
    //     // return to.fullPath ? next({ path: to.fullPath }) : next({ ...to, replace: true })
    //   }

    //   // 服务端路由 结合本地路由
    //   const serverMenuConfig = [...appStore.appAsyncMenus, ...appRoutes, ...WHITE_LIST]

    //   let exist = false
    //   while (serverMenuConfig.length && !exist) {
    //     const element = serverMenuConfig.shift()
    //     if (element?.name === to.name) exist = true

    //     if (element?.children) {
    //       serverMenuConfig.push(...(element.children as unknown as RouteRecordNormalized[]))
    //     }
    //   }
    //   if (exist && permissionsAllow) {
    //     next()
    //   } else next(NOT_FOUND)
    // } else {

    // }
  })
}
