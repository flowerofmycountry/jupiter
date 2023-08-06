import { CSSProperties } from 'vue'
import { FormItemInstance } from '@arco-design/web-vue'

export interface TypeItemAttrs {
  style?: CSSProperties
  [key: string]: any
}

export type ParentType =
  | 'cascader'
  | 'checkbox'
  | 'checkbox-group'
  | 'input'
  | 'input-number'
  | 'input-password'
  | 'input-tag'
  | 'mention'
  | 'radio'
  | 'radio-group'
  | 'rate'
  | 'select'
  | 'slider'
  | 'switch'
  | 'textarea'
  | 'transfer'
  | 'time-picker'
  | 'tree-select'
  | 'upload'
  | 'option'
  | 'date-picker'
  | 'range-picker'
  | 'week-picker'
  | 'quarter-picker'
  | 'year-picker'
  | 'month-picker'

export type ChildType = 'checkbox' | 'radio' | 'option'

export type FormOptions = { value: any } & FormItemInstance['$props'] &
  (
    | {
        type: ParentType
        attrs?: TypeItemAttrs // form-item里slot的组件（input, checkbox...）属性
        children?: {
          type: ChildType
          attrs?: TypeItemAttrs
        }[] // 子表单元素
      }
    | {
        type: 'editor'
        attrs: {
          placeholder?: string
        }
      }
  )

// export interface FormOptions {
//   type: ParentType
//   value: any
//   field?: string // 表单元素在数据对象中的path（数据项必填）
//   label?: string // 标签的文本
//   placeholder?: string // 占位符
//   rules?: FieldRule | FieldRule[]
//   validateTrigger?:
//     | 'input'
//     | 'change'
//     | 'focus'
//     | 'blur'
//     | ('input' | 'change' | 'focus' | 'blur')[]
//   attrs?: TypeItemAttrs // form-item里slot的组件（input, checkbox...）属性
//   children?: {
//     type: ChildType
//     attrs?: TypeItemAttrs
//   }[] // 子表单元素
// }
