<template>
  <a-modal v-model:visible="modalVisible">
    <!-- wang editor 如果高度不够会报警告 -->
    <!-- v-if="modalVisible" 让 modal 展示才加载 wang editor -->
    <f-form
      v-if="modalVisible"
      ref="form"
      :options="options"
      label-align="left"
      auto-label-width
    ></f-form>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import { PropType, ref, watch, watchEffect } from 'vue'
import FForm from '../../form/src/index.vue'
import type { FormInstance } from '../../form'
import type { FormOption } from '../../form/src/typings'

// 表单实例
const form = ref<FormInstance>()

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOption[]>,
    required: true
  }
})

const modalVisible = ref<boolean>(false)
watchEffect(() => {
  modalVisible.value = props.visible
})

const emits = defineEmits(['update:visible'])

watch(
  () => modalVisible.value,
  val => {
    emits('update:visible', val)
  }
)

defineExpose({
  clearValidate: () => {
    form.value?.clearValidate()
  },
  resetFields: () => {
    form.value?.resetFields()
  },
  setFormData: (data: Record<string, any>) => {
    form.value?.setFormData(data)
  },
  getFormData: () => {
    return form.value?.getFormData()
  },
  validate: (cb: (err: any) => void) => {
    return form.value?.validate(cb)
  }
})
</script>

<style scoped></style>
