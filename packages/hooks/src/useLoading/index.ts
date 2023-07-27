import { ref } from 'vue'

export default (initValue = false) => {
  const loading = ref(initValue)
  const showLoading = () => {
    loading.value = true
  }
  const hideLoading = () => {
    loading.value = false
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const toggleLoading = () => {
    loading.value = !loading.value
  }

  return {
    loading,
    showLoading,
    hideLoading,
    setLoading,
    toggleLoading
  }
}
