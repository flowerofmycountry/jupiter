import { FetchDataApiType, SearchField } from '../types'
import { ref } from 'vue'

export default function <T = any>(
  searchFields: SearchField[],
  fetchData: FetchDataApiType
) {
  const resetForm = () => {
    const keys = searchFields.map((field: SearchField) => field.key)
    const result: Record<string, any> = {}
    keys.forEach((key: string) => {
      result[key] = ''
    })
    result.orders = [
      {
        asc: false,
        column: 'id'
      }
    ]
    return result
  }

  const searchForm = ref(resetForm())

  const handleSearch = () => {
    fetchData({
      current: 1,
      ...searchForm.value
    })
  }

  const handleReset = () => {
    searchForm.value = resetForm()

    fetchData({
      current: 1
    })
  }

  return {
    searchForm,
    handleReset,
    handleSearch
  }
}
