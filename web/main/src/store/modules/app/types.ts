export interface ServerMenu {
  id: number
  path: string
  locale: string
  type: 'menu' | 'page' | 'element'
  pid?: number
  icon?: string
  name: string
  order?: number
  children?: ServerMenu[] // 扁平时没有，整形成树形时有
}

export interface AppState {
  theme: string
  colorWeak: boolean
  navbar: boolean
  menu: boolean
  topMenu: boolean
  hideMenu: boolean
  menuCollapse: boolean
  footer: boolean
  themeColor: string
  menuWidth: number
  globalSettings: boolean
  device: string
  tabBar: boolean
  serverMenu: null | ServerMenu[]
  [key: string]: unknown
}
