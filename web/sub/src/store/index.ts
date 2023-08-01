import { createPinia } from 'pinia'
import useUserStore from './modules/user'
// import useTabBarStore from './modules/tab-bar';

const pinia = createPinia()

export { useUserStore }
export default pinia
