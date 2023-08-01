<template>
  <a-modal
    v-model:visible="visible"
    :title="formTitle"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk"
  >
    <a-form ref="formRef" :disabled="readonly" :model="form" :rules="rules">
      <a-form-item label="姓名">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item label="年龄">
        <a-input v-model="form.age" />
      </a-form-item>
      <a-form-item label="地址">
        <a-input v-model="form.address" />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input v-model="form.email" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { useFormModal } from 'jupiter-hoooks'
import { create, update, get } from '@/api/crud'

const props = defineProps<{
  fetchData: () => void
}>()

const resetForm = () => {
  return {
    name: '',
    age: '',
    address: '',
    email: ''
  }
}

const {
  form,
  visible,
  formRef,
  formTitle,
  handleBeforeOk,
  handleCancel,
  readonly,
  view,
  add,
  edit
} = useFormModal({
  name: 'CRUD-',
  resetForm,
  onSuccess: () => {
    props.fetchData()
  },
  $api: {
    insert: create,
    detail: get,
    update
  },
  formatInParams: formData => {
    return {
      ...formData
    }
  },
  formatOutParams: params => {
    return {
      ...params
    }
  }
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
}

defineExpose({
  view,
  add,
  edit
})
</script>

<style scoped></style>
