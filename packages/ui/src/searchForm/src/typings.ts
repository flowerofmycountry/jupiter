import {
  FormItemInstance,
  InputInstance,
  InputNumberInstance,
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
  RangePickerInstance
} from '@arco-design/web-vue'

export type SearchFormOption = FormItemInstance['$props'] &
  (
    | {
        type: 'input'
        value?: InputInstance['$props']['modelValue']
        attrs?: InputInstance['$props']
      }
    | {
        type: 'input-number'
        value?: InputNumberInstance['$props']['modelValue']
        attrs?: InputNumberInstance['$props']
      }
    | {
        type: 'cascader'
        value?: CascaderInstance['$props']['modelValue']
        attrs?: CascaderInstance['$props']
      }
    | {
        type: 'select'
        value?: SelectInstance['$props']['modelValue']
        attrs?: SelectInstance['$props']
        children?: {
          type: 'option'
          attrs: SelectOptionInstance['$props']
        }[]
      }
    | {
        type: 'tree-select'
        value?: TreeSelectInstance['$props']['modelValue']
        attrs?: TreeSelectInstance['$props']
      }
    | {
        type: 'time-picker'
        value?: TimePickerInstance['$props']['modelValue']
        attrs?: TimePickerInstance['$props']
      }
    | {
        type: 'date-picker'
        value?: DatePickerInstance['$props']['modelValue']
        attrs?: DatePickerInstance['$props']
      }
    | {
        type: 'week-picker'
        value?: WeekPickerInstance['$props']['modelValue']
        attrs?: WeekPickerInstance['$props']
      }
    | {
        type: 'quarter-picker'
        value?: QuarterPickerInstance['$props']['modelValue']
        attrs?: QuarterPickerInstance['$props']
      }
    | {
        type: 'year-picker'
        value?: YearPickerInstance['$props']['modelValue']
        attrs?: YearPickerInstance['$props']
      }
    | {
        type: 'month-picker'
        value?: MonthPickerInstance['$props']['modelValue']
        attrs?: MonthPickerInstance['$props']
      }
    | {
        type: 'range-picker'
        value?: RangePickerInstance['$props']['modelValue']
        attrs?: RangePickerInstance['$props']
      }
  )
