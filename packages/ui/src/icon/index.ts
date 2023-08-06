import type { App } from 'vue'
import { Icon } from '@arco-design/web-vue'
import { COMPONENT_PREFIX, ICONFONTURL } from '../config'

const _IconFont = Icon.addFromIconFontCn({
  src: ICONFONTURL
})

const IconFont = Object.assign(_IconFont, {
  install(app: App) {
    app.component(`${COMPONENT_PREFIX}IconFont`, _IconFont)
  }
})

export type IconFontInstance = InstanceType<typeof _IconFont>

export default IconFont
