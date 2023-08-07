<template>
  <a-form v-if="form" ref="formRef" :model="form">
    <template v-for="(item, _index) in options" :key="_index">
      <a-form-item
        :label="item.label"
        :field="item.field"
        :rules="item.rules"
        :validate-trigger="item.validateTrigger"
      >
        <template v-if="item.type === 'editor'">
          <div style="border: 1px solid #ccc">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              mode="default"
              :editor="editorRef"
            />
            <Editor
              v-model="form[item.field!]"
              style="height: 500px; overflow-y: hidden"
              mode="default"
              :default-config="{
                ...item.attrs
              }"
              @on-created="handleCreated"
            />
          </div>
        </template>
        <template v-else>
          <component
            :is="componentsMap[kebabToUpperCamelCase(item.type)]"
            v-if="
              item.type === 'select' ||
              item.type === 'checkbox-group' ||
              item.type === 'radio-group'
            "
            v-model="form[item.field!]"
            v-bind="item.attrs"
          >
            <component
              :is="componentsMap[kebabToUpperCamelCase(child.type)]"
              v-for="(child, i) in item.children"
              :key="i"
              v-bind="child.attrs"
            >
              <template
                v-if="child.type === 'radio' || child.type === 'checkbox'"
              >
                {{ child.attrs!.label }}
              </template>
            </component>
          </component>
          <component
            :is="componentsMap[kebabToUpperCamelCase(item.type)]"
            v-else
            v-model="form[item.field!]"
            v-model:file-list="form[item.field!]"
            v-bind="item.attrs"
          ></component>
        </template>
      </a-form-item>
    </template>
    <a-form-item>
      <slot name="actions" :form="formRef" :model="form"></slot>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import {
  PropType,
  ref,
  onMounted,
  watch,
  shallowRef,
  onBeforeUnmount,
  toRaw
} from 'vue'
import { kebabToUpperCamelCase } from 'jupiter-shared'
import {
  Input,
  InputNumber,
  InputPassword,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Option,
  DatePicker,
  RangePicker,
  Upload
} from '@arco-design/web-vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { IDomEditor } from '@wangeditor/editor'
// import E from 'wangeditor'
import type { FormInstance } from '@arco-design/web-vue'
import { cloneDeep } from 'lodash-es'
import { FormOption } from './typings'
import '@wangeditor/editor/dist/css/style.css'

const componentsMap: Record<string, any> = {
  Input,
  InputNumber,
  InputPassword,
  Select,
  Option,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  DatePicker,
  RangePicker,
  Upload
}

const form = ref<any>(null)
const formRef = ref<FormInstance>()

const props = defineProps({
  options: {
    type: Array as PropType<FormOption[]>,
    required: true
  }
})

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>()

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

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

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
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

defineExpose({
  getFormData: () => {
    return toRaw(form.value)
  },
  setFormData: (data: Record<string, any>) => {
    form.value = data
  },
  clearValidate: () => {
    formRef.value?.clearValidate()
  },
  resetFields: () => {
    formRef.value?.resetFields()
  },
  validate: (cb: (err: any) => void) => {
    return formRef.value?.validate(cb)
  }
})
</script>

<style scoped></style>
