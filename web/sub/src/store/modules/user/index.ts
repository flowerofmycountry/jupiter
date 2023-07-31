import { defineStore } from 'pinia'
import { setToken, clearToken } from 'jupiter-shared'

const useUserStore = defineStore('user', () => {
  function login() {
    try {
      setToken('123456789')
    } catch (err) {
      clearToken()
      throw err
    }
  }

  return {
    login
  }
})

export default useUserStore
