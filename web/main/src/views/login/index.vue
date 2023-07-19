<template>
  <f-login @submit="handleSubmit" :loading="loading" :errorMessage="errorMessage"></f-login>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import { useStorage } from '@vueuse/core'
import { ValidatedError } from '@arco-design/web-vue/es/form/interface'
import { LoginData } from '@/api/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const loading = ref(false)
const setLoading = (value: boolean) => {
  loading.value = value
}

const errorMessage = ref('')

const loginConfig = useStorage<{
  username?: string
  password?: string
  rememberPassword?: boolean
}>('login-config', {})

const handleSubmit = async ({
  errors,
  values,
}: {
  errors: Record<string, ValidatedError> | undefined
  values: Record<string, any>
}) => {
  if (loading.value) return
  if (!errors) {
    setLoading(true)
    try {
      await userStore.login(values as LoginData)

      const { redirect, ...othersQuery } = router.currentRoute.value.query
      router.push({
        name: (redirect as string) || 'Workplace',
        query: {
          ...othersQuery,
        },
      })
      Message.success('登录成功')
      const { rememberPassword } = loginConfig.value
      const { username, password } = values
      // 实际生产环境需要进行加密存储。
      // The actual production environment requires encrypted storage.
      loginConfig.value.username = rememberPassword ? username : ''
      loginConfig.value.password = rememberPassword ? password : ''
    } catch (err) {
      errorMessage.value = (err as Error).message
    } finally {
      setLoading(false)
    }
  }
}
</script>

<style scoped></style>
