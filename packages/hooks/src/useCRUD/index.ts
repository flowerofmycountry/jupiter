import useTable from '../useTable'
import useSearchForm from '../useSearchForm'
import useFormModal from '../useFormModal'

export default <Model>(
  list: any,
  create: any,
  del: any,
  update: any,
  get: any,
  name?: string,
  formatIn?: any,
  formatOut?: any
) => {
  const {
    pagination,
    renderData,
    loading,
    fetchData,
    handlePageChange,
    handlePageSizeChange,
    setPagination
  } = useTable<Model>(list)

  const { searchFormRef, handleSearch, handleReset } = useSearchForm(fetchData)

  const {
    visible,
    mode,
    readonly,
    formModalRef,
    formModalTitle,
    add,
    edit,
    view,
    handleBeforeOk,
    handleCancel
  } = useFormModal({
    name,
    formatInParams: formatIn,
    formatOutParams: formatOut,
    onSuccess: () => {
      fetchData()
    },
    $api: {
      insert: create,
      detail: get,
      update
    }
  })

  return {
    pagination,
    renderData,
    loading,
    fetchData,
    handlePageChange,
    handlePageSizeChange,
    setPagination,
    searchFormRef,
    handleSearch,
    handleReset,
    visible,
    mode,
    readonly,
    formModalRef,
    formModalTitle,
    add,
    edit,
    view,
    remove: (record: any) => {
      del(record.id).then(() => {
        fetchData()
      })
    },
    handleBeforeOk,
    handleCancel
  }
}
