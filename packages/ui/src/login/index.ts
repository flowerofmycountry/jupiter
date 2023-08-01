import type { App } from 'vue'
import _Login from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const Login = Object.assign(_Login, {
  install(app: App) {
    app.component(COMPONENT_PREFIX + _Login.name, _Login)
  }
})

export type LoginInstance = InstanceType<typeof _Login>

export default Login
