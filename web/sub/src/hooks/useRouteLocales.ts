import { useRoute, useRouter } from 'vue-router'

function generateRoutes(path: string) {
  const paths = path.split('/')

  const res = paths.reduce((acc, cu) => {
    if (cu === '') return acc
    if (acc.length === 0) {
      acc.push('/' + cu)
      return acc
    }
    const last = acc[acc.length - 1]
    acc.push(last + '/' + cu)
    return acc
  }, [] as string[])

  return res
}

export default () => {
  const route = useRoute()
  const router = useRouter()

  const pathArr = generateRoutes(route.fullPath)

  const locales = pathArr.map(path => {
    const found = router.getRoutes().find(r => r.path === path)
    if (!found) throw new Error('请检查路由')

    return found.meta.locale as string
  })

  return {
    locales
  }
}

// vue-router 向上逐级查找meta中的locale信息
