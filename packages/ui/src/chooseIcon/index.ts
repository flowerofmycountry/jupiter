import type { App } from 'vue'
import _ChooseIcon from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const ChooseIcon = Object.assign(_ChooseIcon, {
  install(app: App) {
    app.component(COMPONENT_PREFIX + _ChooseIcon.name, _ChooseIcon)
  }
})

export type ChooseIconInstance = InstanceType<typeof _ChooseIcon>

export default ChooseIcon
