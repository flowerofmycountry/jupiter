import {
  FetchDataApiType,
  PagingQueryApiType,
  PagingQueryParams,
  PagingQueryResult
} from '../types'
import { reactive, ref, Ref } from 'vue'
import useLoading from '../useLoading'

export default <T = any>(pagingQuery: PagingQueryApiType<T>) => {
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
    showTotal: true,
    showPageSize: true
  })

  const renderData: Ref<T[]> = ref([])

  const { loading, showLoading, hideLoading } = useLoading()

  const setPagination = ({
    current,
    size,
    total
  }: Partial<PagingQueryResult<T>>) => {
    pagination.current = +(current || 1)
    pagination.pageSize = +(size || 10)
    pagination.total = +(total || 0)
  }

  const fetchData: FetchDataApiType = async (params?: PagingQueryParams) => {
    showLoading()
    const { current, pageSize } = pagination
    const { data } = await pagingQuery({
      current,
      size: pageSize,
      ...params
    })

    // console.log(data)

    hideLoading()
    setPagination(data)
    renderData.value = data.records
  }

  fetchData()

  const handlePageChange = (current: number) => {
    fetchData({
      current,
      size: pagination.pageSize
    })
  }

  const handlePageSizeChange = (pageSize: number) => {
    fetchData({
      current: pagination.current,
      size: pageSize
    })
  }

  return {
    pagination,
    renderData,
    loading,
    fetchData,
    handlePageChange,
    handlePageSizeChange,
    setPagination
  }
}
