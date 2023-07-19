import { defineStore } from 'pinia'
import { AppInfoState } from './types'

const ActiveSubStore = defineStore('active', {
  state: (): AppInfoState => ({
    name: undefined,
    title: undefined,
    baseName: undefined,
    host: undefined
    // url: undefined
  }),

  getters: {
    activeSubInfo(state: AppInfoState): AppInfoState {
      return { ...state }
    },

    hasActiveSub(): boolean {
      return this.name !== undefined
    }
  },

  actions: {
    // Set user's information
    setInfo(partial: Partial<AppInfoState>) {
      this.$patch(partial)
    },

    clearActive() {
      this.$patch({
        name: undefined,
        title: undefined,
        baseName: undefined,
        host: undefined
      })
    }

    // setPage(path: string) {
    //   this.$patch({
    //     url: this.host! + this.baseName! + path
    //   })
    // }
  }
})

export default ActiveSubStore
