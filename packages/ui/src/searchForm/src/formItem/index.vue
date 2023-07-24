<template>
  <a-form-item
    :disabled="field.disabled"
    :field="field.key"
    :rules="autoFixRules(field)"
    :label="field.label"
  >
    <a-input
      v-if="field.type === 'input'"
      v-model="form[field.key]"
      show-word-limit
      allow-clear
      v-bind="field.props"
      :placeholder="field.placeholder"
    ></a-input>

    <a-input-number
      v-else-if="field.type === 'inputNumber'"
      v-model="form[field.key]"
      v-bind="field.props"
      :placeholder="field.placeholder"
    ></a-input-number>

    <a-input-tag
      v-else-if="field.type === 'inputTag'"
      v-model="form[field.key]"
      :max-tag-count="3"
      allow-clear
      v-bind="field.props"
      :placeholder="field.placeholder"
    />

    <a-textarea
      v-else-if="field.type === 'textarea'"
      v-model="form[field.key]"
      :max-length="200"
      show-word-limit
      allow-clear
      v-bind="field.props"
      :placeholder="field.placeholder"
    />

    <a-select
      v-else-if="['select'].includes(field.type)"
      v-model="form[field.key]"
      allow-clear
      v-bind="field.props"
      :options="field.options"
      @search="handleRemoteSearch"
      :placeholder="field.placeholder"
    ></a-select>

    <a-select
      v-bind="field.props"
      v-else-if="field.type === 'select-group'"
      v-model="form[field.key]"
      :placeholder="field.placeholder"
    >
      <a-optgroup
        :label="item[field.groupLabel]"
        v-for="(item, index) in field.groups"
        :key="index"
      >
        <a-option
          v-for="(ele, eleIndex) in item[field.options]"
          :key="eleIndex"
          :label="ele[field.optionsLabel]"
          :value="ele[field.optionsValue]"
        ></a-option>
      </a-optgroup>
    </a-select>

    <a-tree-select
      v-else-if="field.type === 'treeSelect'"
      v-model="form[field.key]"
      :data="field.data"
      :placeholder="field.placeholder"
      v-bind="field.props"
    ></a-tree-select>

    <a-checkbox-group
      v-else-if="field.type === 'checkbox'"
      v-model="form[field.key]"
      :options="field.options"
      :placeholder="field.placeholder"
    ></a-checkbox-group>

    <a-switch
      v-else-if="field.type === 'switch'"
      v-model="form[field.key]"
    ></a-switch>

    <a-range-picker
      v-else-if="field.type === 'rangePicker'"
      v-model="form[field.key]"
      v-bind="field.props"
      @select="handleRangeSelect"
      :disabled-date="disabledDate"
      :placeholder="field.placeholder"
    ></a-range-picker>

    <a-date-picker
      v-else-if="field.type === 'datePicker'"
      v-model="form[field.key]"
      v-bind="field.props"
      :placeholder="field.placeholder"
      style="width: 100%"
    ></a-date-picker>

    <a-time-picker
      v-else-if="field.type === 'timePicker'"
      v-model="form[field.key]"
      :placeholder="field.placeholder"
    ></a-time-picker>

    <a-radio-group v-else-if="field.type === 'radio'" v-model="form[field.key]">
      <a-radio
        v-for="option in field.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </a-radio>
    </a-radio-group>

    <a-slider
      v-else-if="field.type === 'slider'"
      v-model="form[field.key]"
      style="width: 94%; margin-left: 3%"
    ></a-slider>
  </a-form-item>
</template>

<script lang="ts" setup>
import { SearchField } from 'jupiter-hoooks'

const props = defineProps<{
  field: SearchField
  form: Record<string, any>
  label?: string
}>()

props.field.remoteOptions && props.field.remoteOptions(props.form)

const handleRemoteSearch = (key: string) => {
  props.field.remoteOptions && props.field.remoteOptions(props.form, key)
}

const autoFixRules = (field: any) => {
  const fieldRules = field.rules || []
  const requiredRules = field.props?.required
    ? [{ required: true, message: `请输入${field.label}` }]
    : []
  return [...fieldRules, ...requiredRules]
}

const handleRangeSelect = (valueString: string, value: Date[]) => {
  props.form[props.field.key] = value
}

const disabledDate = (current: any) => {
  const dates = props.form[props.field.key]
  if (dates && dates.length && props.field.props?.range) {
    const tooLate =
      dates[0] &&
      Math.abs(new Date(current).getTime() - dates[0]) >
        props.field.props?.range
    const tooEarly =
      dates[1] &&
      Math.abs(new Date(current).getTime() - dates[1]) >
        props.field.props?.range
    return tooEarly || tooLate
  }
  return false
}
</script>
