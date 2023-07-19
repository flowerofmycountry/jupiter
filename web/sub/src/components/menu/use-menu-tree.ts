import { computed } from 'vue'
import { cloneDeep } from 'lodash'
import { appRoutes } from '@/router/routes'
import { MenuRecord } from './types'
// import usePermission from '@/hooks/permission';

export default function useMenuTree() {
  const menuTree = computed(() => {
    const menus = cloneDeep(appRoutes) as MenuRecord[]
    menus.sort((a: MenuRecord, b: MenuRecord) => {
      return ((a.meta?.order as number) || 0) - ((b.meta?.order as number) || 0)
    })

    return menus
  })

  return {
    menuTree
  }
}
