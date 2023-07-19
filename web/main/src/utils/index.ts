import type { RouteLocationNormalized } from 'vue-router'
export const extractSubAppName = (to: RouteLocationNormalized) => {
  const subAppPath = to.path

  if (!subAppPath.includes('/sub-app/')) return undefined

  const regex = /\/sub-app\/([^\/]+)/
  const match = regex.exec(subAppPath)

  if (match) {
    return match[1] as string
  }

  return undefined
}
