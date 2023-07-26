import { defineComponent, ref, h, compile } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MenuRecord } from './types'
import { listenerRouteChange } from 'jupiter-shared'
import useMenuTree from './use-menu-tree'
import { useActiveSubStore, useAppStore } from '@/store'

export default defineComponent({
  name: 'RouterMenu',
  setup() {
    const activeSubStore = useActiveSubStore()
    const appStore = useAppStore()

    const router = useRouter()
    const route = useRoute()
    const { menuTree } = useMenuTree()

    const selectedKey = ref<string[]>([])
    const openKeys = ref<string[]>([])

    const findMenuOpenKeys = (target: string) => {
      const result: string[] = []
      let isFind = false
      const backtrack = (item: MenuRecord, keys: string[]) => {
        if (item.name === target) {
          isFind = true
          result.push(...keys)
          return
        }
        if (item.children?.length) {
          item.children.forEach(el => {
            backtrack(el, [...keys, el.name as string])
          })
        }
      }
      menuTree.value.forEach((el: MenuRecord) => {
        if (isFind) return // Performance optimization
        backtrack(el, [el.name as string])
      })
      return result
    }

    listenerRouteChange(newRoute => {
      // console.log(newRoute, 'newRoute')
      // console.log(menuTree, 'menuTree')
      //   const name = newRoute.name === 'sub-app' ? menuTree.value.find(el => el.path)
      let name = newRoute.name as string
      if (newRoute.name === 'sub-app') {
        const menu = appStore.appAsyncMenus.find(el =>
          newRoute.path.endsWith(el.path!)
        )
        // const menu = menuTree.value.find(el => newRoute.path.endsWith(el.path!))

        // menuTree 第一个永远是home 默认选中第二个
        name = menu?.name ?? menuTree.value[1].name
      }

      const menuOpenKeys = findMenuOpenKeys(name)

      const keySet = new Set([...menuOpenKeys, ...openKeys.value])
      openKeys.value = [...keySet]

      selectedKey.value = [menuOpenKeys[menuOpenKeys.length - 1]]
    }, true)

    const goto = (item: MenuRecord) => {
      if (route.name === item.name) {
        selectedKey.value = [item.name as string]
        return
      }

      if (activeSubStore.hasActiveSub && item.name !== 'home') {
        // debugger
        const { baseName } = activeSubStore.activeSubInfo
        // router.push({
        //   path: baseName! + item.path
        // })

        // activeSubStore.setPage(item.path!)
        router.push({
          path: baseName! + item.path
        })

        console.log(activeSubStore)

        // const query: Record<string, string> = {}
        // query[name!] = baseName! + item.path
        // router.push({
        //   name: 'sub-app',
        //   query
        // })
      } else {
        router.push({
          name: item.name
        })
      }
    }

    const renderMenu = (data: MenuRecord[]) => {
      return data.map(element => {
        // console.log(element)

        const title = () => <span>{element.meta?.locale}</span>
        const icon = () => h(compile(`<${element.meta?.icon} />`))
        // const slotRenders = {
        //   title: () => <span>{item.name}</span>,
        //   icon: () => <item.icon />,
        // }

        if (element.children && element.children.length > 0) {
          return (
            <a-sub-menu key={element.name} v-slots={{ title, icon }}>
              {renderMenu(element.children)}
            </a-sub-menu>
          )
        }
        return (
          <a-menu-item
            key={element.name}
            v-slots={{ icon }}
            onClick={() => goto(element)}
          >
            <span>{element.meta?.locale}</span>
          </a-menu-item>
        )
      })
    }

    // const attrs = useAttrs()

    return () => (
      <a-menu
        auto-open={false}
        auto-open-selected={true}
        showCollapseButton={true}
        v-model:selected-keys={selectedKey.value}
        v-model:open-keys={openKeys.value}
        style="height: 100%;width:240px;"
      >
        {renderMenu(menuTree.value)}
      </a-menu>
    )
  }
})
