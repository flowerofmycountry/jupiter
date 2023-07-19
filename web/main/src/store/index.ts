import { createPinia } from 'pinia'
import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useActiveSubStore from './modules/active-sub'
// import useTabBarStore from './modules/tab-bar';

const pinia = createPinia()

export type { Project } from './modules/user/types'

export { useAppStore, useUserStore, useActiveSubStore }
export default pinia
