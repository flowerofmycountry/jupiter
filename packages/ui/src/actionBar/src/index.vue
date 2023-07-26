<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in items" :key="item">
      {{ item }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'ActionBar'
}
</script>

<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<string[]>,
    default() {
      return []
    }
  }
})
</script>

<style lang="less">
.container-breadcrumb {
  margin-bottom: 16px;
  :deep(.arco-breadcrumb-item) {
    color: rgb(var(--gray-6));
    &:last-child {
      color: rgb(var(--gray-8));
    }
  }
}
</style>
