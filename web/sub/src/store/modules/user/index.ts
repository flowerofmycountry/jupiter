import { defineStore } from 'pinia'
import { setToken, clearToken } from 'jupiter-shared'

const useUserStore = defineStore('user', {
  state: (): any => ({}),

  actions: {
    // Login
    async login() {
      try {
        setToken('123456789')
      } catch (err) {
        clearToken()
        throw err
      }
    }
  }
})

export default useUserStore
