import type { App } from 'vue'
import _ActionBar from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const ActionBar = Object.assign(_ActionBar, {
  install(app: App) {
    app.component(COMPONENT_PREFIX + _ActionBar.name, _ActionBar)
  }
})

export type ActionBarInstance = InstanceType<typeof _ActionBar>

export default ActionBar
