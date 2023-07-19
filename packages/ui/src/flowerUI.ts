import type { App, Plugin } from 'vue'

import ChooseIcon from './chooseIcon'
import Layout from './layout'
import Login from './login'
import ActionBar from './actionBar'
import TableFeatureBar from './tableFeatureBar'
import SearchForm from './searchForm'

const components: Record<string, Plugin> = {
  ChooseIcon,
  Layout,
  Login,
  ActionBar,
  TableFeatureBar,
  SearchForm
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

const FlowerUI = {
  ...components,
  install
}

export default FlowerUI
