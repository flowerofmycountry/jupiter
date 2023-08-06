import type { App } from 'vue'
import _SearchForm from './src/index.vue'
import { COMPONENT_PREFIX } from '../config'

const SearchForm = Object.assign(_SearchForm, {
  install(app: App) {
    app.component(`${COMPONENT_PREFIX}SearchForm`, _SearchForm)
  }
})

export type SearchFormInstance = InstanceType<typeof _SearchForm>
export type { SearchFormOption } from './src/typings'

export default SearchForm
