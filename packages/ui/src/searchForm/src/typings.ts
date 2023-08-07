import { FormItemInstance } from '@arco-design/web-vue'
import {
  CascaderFormOption,
  DatePickerFormOption,
  InputFormOption,
  InputNumberFormOption,
  MonthPickerFormOption,
  QuarterPickerFormOption,
  RangePickerFormOption,
  SelectFormOption,
  TimePickerFormOption,
  TreeSelectFormOption,
  WeekPickerFormOption,
  YearPickerFormOption
} from '../../form/src/typings'

export type SearchFormOption = FormItemInstance['$props'] &
  (
    | InputFormOption
    | InputNumberFormOption
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
  )
