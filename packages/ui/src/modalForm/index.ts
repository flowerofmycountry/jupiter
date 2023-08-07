import type { App } from 'vue'
import _ModalForm from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const ModalForm = Object.assign(_ModalForm, {
  install(app: App) {
    app.component(`${COMPONENT_PREFIX}ModalForm`, _ModalForm)
  }
})

export type ModalFormInstance = InstanceType<typeof _ModalForm>
export type { ModalFormOption } from './src/typings'

export default ModalForm
