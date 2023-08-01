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
    },

    activeBody(): HTMLElement | null {
      // 子应用适配
      const subFrame: any = window.document.querySelector(
        `iframe[name=${this.name}]`
      )

      return subFrame ? subFrame.contentWindow.document.body : null
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
