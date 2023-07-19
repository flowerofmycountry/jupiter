import type { App } from 'vue'
import _TableFeatureBar from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const TableFeatureBar = Object.assign(_TableFeatureBar, {
  install(app: App) {
    app.component(COMPONENT_PREFIX + _TableFeatureBar.name, _TableFeatureBar)
  }
})

export type TableFeatureBarInstance = InstanceType<typeof _TableFeatureBar>

export default TableFeatureBar
