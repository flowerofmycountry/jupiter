<template>
  <a-form :model="form" label-align="left" ref="formRef">
    <a-row :gutter="16">
      <a-col
        v-for="field in fields"
        :key="field.key"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
        :xxl="6"
      >
        <form-item :field="field" :form="form"></form-item>
      </a-col>
    </a-row>
  </a-form>
  <div style="display: flex; flex-direction: row-reverse">
    <a-space :size="12">
      <a-button type="primary" @click="search">
        <template #icon>
          <icon-search />
        </template>
        搜索
      </a-button>
      <a-button @click="reset">
        <template #icon>
          <icon-refresh />
        </template>
        重置
      </a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import FormItem from './formItem/index.vue'
import type { SearchField } from 'jupiter-hoooks'
import { Form } from '@arco-design/web-vue'
import { ref } from 'vue'

defineProps<{
  fields: SearchField[]
  form: Record<string, any>
}>()

const emits = defineEmits<{
  reset: []
  search: []
}>()

const reset = () => {
  emits('reset')
}

const formRef = ref<InstanceType<typeof Form>>()

const search = () => {
  formRef.value?.validate(err => {
    if (!err) {
      emits('search')
    }
  })
}
</script>

<style lang="less">
.arco-form-item-label-col {
  padding-right: 8px;
}

.arco-col {
  .fold-control {
    color: rgb(var(--primary-6));
    cursor: pointer;
    user-select: none;

    .text {
      margin-left: 8px;
    }
  }
}
</style>
