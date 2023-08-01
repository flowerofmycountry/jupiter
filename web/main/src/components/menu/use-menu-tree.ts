import { computed } from 'vue'
import { cloneDeep } from 'lodash'
import { appRoutes } from '@/router/routes'
import { useAppStore } from '@/store'
import { ServerMenu } from '@/store/modules/app/types'
import { MenuRecord } from './types'

export default function useMenuTree() {
  const appStore = useAppStore()
  const appRoute = computed(() => {
    // 从服务端获取的菜单配置
    const serverMenu = formatMenuToTree(appStore.appAsyncMenus).map(el =>
      convertToMenuRecord(el)
    )

    serverMenu.push(appRoutes.find(el => el.name === 'home') as MenuRecord)

    return serverMenu
  })
  const menuTree = computed(() => {
    const menus = cloneDeep(appRoute.value) as MenuRecord[]
    menus.sort((a: MenuRecord, b: MenuRecord) => {
      return ((a.meta?.order as number) || 0) - ((b.meta?.order as number) || 0)
    })

    return menus
  })

  return {
    menuTree
  }
}

function formatMenuToTree(flatenMenu: ServerMenu[]) {
  const menuTree = flatenMenu.filter(
    element => !element.pid && ['menu', 'page'].includes(element.type)
  )
  const menuTreeChildren = flatenMenu.filter(element => element.pid !== 0)

  function travel(menuTree: ServerMenu[], menuTreeChildren: ServerMenu[]) {
    menuTree.forEach(element => {
      const children = menuTreeChildren.filter(el => el.pid === element.id)
      if (children.length) {
        element.children = children
        travel(children, menuTreeChildren)
      }
    })
  }
  travel(menuTree, menuTreeChildren)
  return menuTree
}

const convertToMenuRecord = (menu: ServerMenu): MenuRecord => {
  return {
    name: menu.name,
    path: menu.path,
    meta: {
      icon: menu.icon,
      locale: menu.locale,
      order: menu.order
    },
    children: menu.children?.map(convertToMenuRecord)
  }
}
