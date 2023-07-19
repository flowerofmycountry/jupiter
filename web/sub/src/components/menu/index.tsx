import { defineComponent, ref, h, compile } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MenuRecord } from './types'
import { listenerRouteChange } from 'jupiter-shared'
import useMenuTree from './use-menu-tree'

export default defineComponent({
  name: 'RouterMenu',
  setup() {
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
      const menuOpenKeys = findMenuOpenKeys(newRoute.name as string)

      const keySet = new Set([...menuOpenKeys, ...openKeys.value])
      openKeys.value = [...keySet]

      selectedKey.value = [menuOpenKeys[menuOpenKeys.length - 1]]
    }, true)

    const goto = (item: MenuRecord) => {
      if (route.name === item.name) {
        selectedKey.value = [item.name as string]
        return
      }

      router.push({
        name: item.name
      })
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
