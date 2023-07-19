// import { defineComponent } from 'vue'
// import type { RouteMeta, NavigationGuard } from 'vue-router'

// export type Component<T = any> =
//   | ReturnType<typeof defineComponent>
//   | (() => Promise<typeof import('*.vue')>)
//   | (() => Promise<T>)

// export interface

/**
 * 树形菜单
 *
 * @export
 * @interface MenuRecord
 * @typedef {MenuRecord}
 */
export interface MenuRecord {
  /**
   * 作为菜单的 key，必须填写且唯一
   *
   * @type {string}
   */
  name: string
  path?: string
  meta?: {
    locale: string
    icon?: string
    [key: string]: any
  }
  children?: MenuRecord[]
  [key: string]: any
}
