import { DirectiveBinding } from 'vue'
import type { Directive } from 'vue'

function checkPermission(el: HTMLElement, binding: DirectiveBinding<string>) {
  if (window.__POWERED_BY_WUJIE__) {
    const { value } = binding
    if (value) {
      const permissions = value.split(',')
      // 这里以后要从 store 中取出用户的权限 进行判断
      const hasPermission = permissions.some(() => true)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export default {
  mouted(el: HTMLElement, binding: DirectiveBinding<string>) {
    checkPermission(el, binding)
  }
} as Directive
