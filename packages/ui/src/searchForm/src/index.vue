<template>
  <a-form
    v-if="form"
    ref="formRef"
    :model="form"
    v-bind="$attrs"
    label-align="left"
    auto-label-width
  >
    <a-grid :cols="cols" :col-gap="12" :collapsed="collapsed">
      <a-grid-item v-for="(item, index) in options" :key="index">
        <a-form-item
          :label="item.label"
          :field="item.field"
          :rules="item.rules"
          :validate-trigger="item.validateTrigger"
        >
          <component
            :is="componentsMap[kebabToUpperCamelCase(item.type)]"
            v-if="item.type !== 'select'"
            v-model="form[item.field!]"
            v-model:file-list="form[item.field!]"
            v-bind="item.attrs"
            :style="{
              width: '100%',
              ...item.attrs?.style!
            }"
          ></component>
          <component
            :is="componentsMap[kebabToUpperCamelCase(item.type)]"
            v-else
            v-model="form[item.field!]"
            v-bind="item.attrs"
          >
            <component
              :is="componentsMap[kebabToUpperCamelCase(child.type)]"
              v-for="(child, i) in item.children"
              :key="i"
              v-bind="child.attrs"
            ></component>
          </component>
        </a-form-item>
      </a-grid-item>
      <a-grid-item suffix style="display: flex; flex-direction: row-reverse">
        <a-space :size="12" align="baseline">
          <div>
            <a-typography-text>折叠：</a-typography-text>
            <a-switch :checked="collapsed" @click="collapsed = !collapsed" />
          </div>
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
      </a-grid-item>
    </a-grid>
  </a-form>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { kebabToUpperCamelCase } from 'jupiter-shared'
import {
  Input,
  InputNumber,
  Cascader,
  Select,
  Option,
  TreeSelect,
  TimePicker,
  DatePicker,
  WeekPicker,
  QuarterPicker,
  YearPicker,
  MonthPicker,
  RangePicker
} from '@arco-design/web-vue'
import type { FormInstance, ResponsiveValue } from '@arco-design/web-vue'
import { cloneDeep } from 'lodash-es'
import { SearchFormOption } from './typings'

const componentsMap: Record<string, any> = {
  Input,
  InputNumber,
  Cascader,
  Select,
  Option,
  TreeSelect,
  TimePicker,
  DatePicker,
  WeekPicker,
  QuarterPicker,
  YearPicker,
  MonthPicker,
  RangePicker
}

const form = ref<any>(null)
const formRef = ref<FormInstance>()

const props = withDefaults(
  defineProps<{
    options: SearchFormOption[]
    cols?: ResponsiveValue | number
  }>(),
  {
    //  对象的话要写成函数形式
    cols: () => {
      return {
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4
      }
    }
  }
)

const collapsed = ref(false)

const initForm = () => {
  if (!props.options || props.options.length === 0) return

  const formData: Record<string, any> = {}
  props.options.forEach(item => {
    formData[item.field!] = item.value
  })

  form.value = cloneDeep(formData)
}

onMounted(() => {
  initForm()
})

watch(
  () => props.options,
  () => {
    initForm()
  },
  {
    deep: true
  }
)

const emit = defineEmits<{
  search: [formData: any]
  reset: [formData: any]
}>()

const reset = () => {
  formRef.value?.resetFields()

  // props.searchApi({
  //   current: 1
  // })
  emit('reset', form.value)
}

const search = () => {
  formRef.value?.validate(err => {
    if (!err) {
      emit('search', form.value)
      // props.searchApi({
      //   current: 1,
      //   ...form.value
      // })
    }
  })
}
</script>

<style scoped></style>
