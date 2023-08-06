import type { App, Plugin } from 'vue'

import ChooseIcon from './chooseIcon'
import Layout from './layout'
import Login from './login'
import ActionBar from './actionBar'
import TableFeatureBar from './tableFeatureBar'
import Form from './form'
import SearchForm from './searchForm'
import IconFont from './icon'

const components: Record<string, Plugin> = {
  ChooseIcon,
  Layout,
  Login,
  ActionBar,
  TableFeatureBar,
  Form,
  SearchForm,
  IconFont
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
