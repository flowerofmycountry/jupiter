<template>
  <a-form
    :model="form"
    :label-col-props="{ span: 6 }"
    :wrapper-col-props="{ span: 18 }"
    label-align="left"
  >
    <a-row :gutter="16">
      <a-col v-for="field in renderFields" :key="field.key" :span="spanPerCol">
        <form-item :field="field" :form="form"></form-item>
      </a-col>
      <a-col
        v-for="item in placeholders"
        :key="item"
        :span="spanPerCol"
      ></a-col>
      <a-col style="text-align: right" :span="spanPerCol">
        <a-space :size="12" style="margin-bottom: 16px">
          <div
            v-if="hasFoldControl"
            class="fold-control"
            @click="isFold = !isFold"
          >
            <icon-down v-if="isFold" />
            <icon-up v-else />
            <span class="text">{{ isFold ? '展开' : '折叠' }}</span>
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
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
export default {
  name: 'SearchForm'
}
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import FormItem from './formItem/index.vue'
import type { SearchField } from '@jupiter/hooks'

const props = defineProps<{
  fields: SearchField[]
  form: Record<string, any>
  cols?: 2 | 3 | 4 | 6
}>()

const emits = defineEmits(['reset', 'search'])

const reset = () => {
  emits('reset')
}

const isFold = ref(true)
const maxColsPerRow = computed(() => {
  return +(props.cols || 4)
})
const spanPerCol = computed(() => {
  return 24 / maxColsPerRow.value
})
const hasFoldControl = computed(() => {
  return props.fields.length >= maxColsPerRow.value
})

const renderFields = computed(() => {
  if (isFold.value) {
    return props.fields.slice(0, maxColsPerRow.value - 1)
  } else {
    return props.fields
  }
})

const placeholders = computed(() => {
  const fieldsLength = renderFields.value.length
  return maxColsPerRow.value - 1 - (fieldsLength % maxColsPerRow.value)
})

const search = () => {
  emits('search')
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
