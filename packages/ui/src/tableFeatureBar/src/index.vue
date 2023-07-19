<template>
  <a-row justify="space-between" style="margin-bottom: 16px">
    <a-space>
      <a-button
        size="small"
        v-permission="'add'"
        type="primary"
        @click="handleAdd"
      >
        <template #icon>
          <icon-plus />
        </template>
        创建
      </a-button>
      <slot name="left">
        <a-button v-permission="'import'" @click="handleImport" size="small">
          导入
        </a-button>
      </slot>
    </a-space>
    <a-space>
      <slot name="right">
        <a-button
          v-permission="'download'"
          size="small"
          @click="handleDownload"
        >
          <template #icon>
            <icon-download />
          </template>
          下载
        </a-button>
      </slot>
    </a-space>
  </a-row>
</template>

<script lang="ts">
export default {
  name: 'TableFeatureBar'
}
</script>

<script lang="ts" setup>
interface Props {
  hasImport?: boolean
  hasDownload?: boolean
}

const emits = defineEmits(['add', 'refresh', 'import', 'download'])

const handleAdd = () => {
  emits('add')
}

const handleImport = () => {
  emits('import')
}
const handleDownload = () => {
  emits('download')
}
</script>

<style lang="less">
.row-layout {
  display: flex;
  align-items: center;

  .arco-upload-list-item {
    margin-top: 0 !important;
    margin-left: 12px;

    .arco-upload-list-item-content {
      padding: 6px 12px;
    }
  }
}
</style>
