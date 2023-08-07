import {
  FormItemInstance,
  InputInstance,
  InputNumberInstance,
  InputPasswordInstance,
  CascaderInstance,
  SelectInstance,
  SelectOptionInstance,
  TreeSelectInstance,
  TimePickerInstance,
  DatePickerInstance,
  WeekPickerInstance,
  QuarterPickerInstance,
  YearPickerInstance,
  MonthPickerInstance,
  RangePickerInstance,
  RadioInstance,
  RadioGroupInstance,
  CheckboxInstance,
  CheckboxGroupInstance,
  UploadInstance
} from '@arco-design/web-vue'

export type InputFormOption = {
  type: 'input'
  value?: InputInstance['$props']['modelValue']
  attrs?: InputInstance['$props']
}

export type InputNumberFormOption = {
  type: 'input-number'
  value?: InputNumberInstance['$props']['modelValue']
  attrs?: InputNumberInstance['$props']
}

export type InputPasswordFormOption = {
  type: 'input-password'
  value?: InputInstance['$props']['modelValue']
  attrs?: InputInstance['$props'] & InputPasswordInstance['$props']
}

export type CascaderFormOption = {
  type: 'cascader'
  value?: CascaderInstance['$props']['modelValue']
  attrs?: CascaderInstance['$props']
}

export type SelectOptionFormOption = {
  type: 'option'
  attrs: SelectOptionInstance['$props']
}

export type SelectFormOption = {
  type: 'select'
  value?: SelectInstance['$props']['modelValue']
  attrs?: SelectInstance['$props']
  children?: SelectOptionFormOption[]
}

export type TreeSelectFormOption = {
  type: 'tree-select'
  value?: TreeSelectInstance['$props']['modelValue']
  attrs?: TreeSelectInstance['$props']
}

export type TimePickerFormOption = {
  type: 'time-picker'
  value?: TimePickerInstance['$props']['modelValue']
  attrs?: TimePickerInstance['$props']
}

export type DatePickerFormOption = {
  type: 'date-picker'
  value?: DatePickerInstance['$props']['modelValue']
  attrs?: DatePickerInstance['$props']
}

export type WeekPickerFormOption = {
  type: 'week-picker'
  value?: WeekPickerInstance['$props']['modelValue']
  attrs?: WeekPickerInstance['$props']
}

export type QuarterPickerFormOption = {
  type: 'quarter-picker'
  value?: QuarterPickerInstance['$props']['modelValue']
  attrs?: QuarterPickerInstance['$props']
}

export type YearPickerFormOption = {
  type: 'year-picker'
  value?: YearPickerInstance['$props']['modelValue']
  attrs?: YearPickerInstance['$props']
}

export type MonthPickerFormOption = {
  type: 'month-picker'
  value?: MonthPickerInstance['$props']['modelValue']
  attrs?: MonthPickerInstance['$props']
}

export type RangePickerFormOption = {
  type: 'range-picker'
  value?: RangePickerInstance['$props']['modelValue']
  attrs?: RangePickerInstance['$props']
}

export type RadioFormOption = {
  type: 'radio'
  value?: RadioInstance['$props']['modelValue']
  attrs?: RadioInstance['$props'] & { label: string }
}
export type RadioGroupFormOption = {
  type: 'radio-group'
  value?: RadioGroupInstance['$props']['modelValue']
  attrs?: RadioGroupInstance['$props']
  children?: RadioFormOption[]
}

export type CheckboxFormOption = {
  type: 'checkbox'
  value?: CheckboxInstance['$props']['modelValue']
  attrs?: CheckboxInstance['$props'] & { label: string }
}

export type CheckboxGroupFormOption = {
  type: 'checkbox-group'
  value?: CheckboxGroupInstance['$props']['modelValue']
  attrs?: CheckboxGroupInstance['$props']
  children?: CheckboxFormOption[]
}

export type UploadFormOption = {
  type: 'upload'
  value?: UploadInstance['$props']['fileList']
  attrs?: UploadInstance['$props']
}

export type FormOption = FormItemInstance['$props'] &
  (
    | InputFormOption
    | InputNumberFormOption
    | InputPasswordFormOption
    | CascaderFormOption
    | SelectFormOption
    | TreeSelectFormOption
    | TimePickerFormOption
    | DatePickerFormOption
    | WeekPickerFormOption
    | QuarterPickerFormOption
    | YearPickerFormOption
    | MonthPickerFormOption
    | RangePickerFormOption
    | RadioGroupFormOption
    | RadioFormOption
    | CheckboxGroupFormOption
    | CheckboxFormOption
    | UploadFormOption
    | {
        /* wang editor */
        type: 'editor'
        value?: string
        attrs: {
          placeholder?: string
        }
      }
  )
