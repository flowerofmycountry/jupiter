import type { App, Plugin } from 'vue'

import ChooseIcon from './chooseIcon'
import Layout from './layout'
import Login from './login'
import ActionBar from './actionBar'
import TableFeatureBar from './tableFeatureBar'
import Form from './form'
import SearchForm from './searchForm'
import IconFont from './icon'
import ModalForm from './modalForm'

const components: Record<string, Plugin> = {
  ChooseIcon,
  Layout,
  Login,
  ActionBar,
  TableFeatureBar,
  Form,
  SearchForm,
  IconFont,
  ModalForm
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
