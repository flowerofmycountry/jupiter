<template>
  <div class="bar-wrapper">
    <a-row justify="space-between" align="center">
      <a-space>
        <a-button @click="back" v-if="hasBack" size="mini">
          <icon-left />
        </a-button>
        <div class="page-title">
          <slot name="left"></slot>
          <slot></slot>
        </div>
      </a-space>

      <a-space>
        <slot name="center"></slot>
      </a-space>

      <a-space>
        <slot name="right"></slot>
      </a-space>
    </a-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ActionBar'
}
</script>

<script lang="ts" setup>
const props = defineProps<{
  hasBack?: boolean
  back?: () => void
}>()

const back = () => {
  props.back && props.back()
}
</script>

<style lang="less">
.bar-wrapper {
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
  background: var(--color-bg-1);
  color: var(--color-text-1);
  box-shadow: 0 2px 10px rgb(var(--gray-2));
  z-index: 1;

  .page-title {
    font-size: 16px;
  }
}
</style>
