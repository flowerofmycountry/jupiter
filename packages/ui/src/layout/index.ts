import type { App } from 'vue'
import _Layout from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const Layout = Object.assign(_Layout, {
  install(app: App) {
    app.component(COMPONENT_PREFIX + _Layout.name, _Layout)
  }
})

export type LayoutInstance = InstanceType<typeof _Layout>

export type { MenuRecord } from './src/types'

export default Layout
