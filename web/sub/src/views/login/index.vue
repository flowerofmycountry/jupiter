<template>
  <f-login
    @submit="handleSubmit"
    :loading="loading"
    :errorMessage="errorMessage"
  ></f-login>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Login as FLogin } from 'jupiter-uii'
import { useUserStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import { ValidatedError } from '@arco-design/web-vue/es/form/interface'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const loading = ref(false)
const setLoading = (value: boolean) => {
  loading.value = value
}

const errorMessage = ref('')

const handleSubmit = async ({
  errors
}: {
  errors: Record<string, ValidatedError> | undefined
}) => {
  if (loading.value) return
  if (!errors) {
    setLoading(true)
    try {
      await userStore.login()

      const { redirect, ...othersQuery } = router.currentRoute.value.query
      router.push({
        name: (redirect as string) || 'Workplace',
        query: {
          ...othersQuery
        }
      })
      Message.success('登录成功')
    } catch (err) {
      errorMessage.value = (err as Error).message
    } finally {
      setLoading(false)
    }
  }
}
</script>

<style scoped></style>
