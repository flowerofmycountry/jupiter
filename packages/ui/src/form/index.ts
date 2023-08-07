import type { App } from 'vue'
import _Form from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const Form = Object.assign(_Form, {
  install(app: App) {
    app.component(`${COMPONENT_PREFIX}Form`, _Form)
  }
})

export type FormInstance = InstanceType<typeof _Form>
export type { FormOption } from './src/typings'

export default Form
