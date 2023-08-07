import { ref } from 'vue'
import { FetchDataApiType } from '../types'

export default (fetchData: FetchDataApiType) => {
  const searchFormRef = ref<any>()

  const handleSearch = (formData: any) => {
    fetchData({
      current: 1,
      ...formData
    })
  }

  const handleReset = () => {
    fetchData({
      current: 1
    })
  }

  return {
    searchFormRef,
    handleReset,
    handleSearch
  }
}
