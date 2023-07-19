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
