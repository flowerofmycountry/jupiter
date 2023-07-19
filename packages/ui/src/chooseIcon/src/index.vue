<template>
  <a-button @click="updateVisible">
    <!-- button显示文本 -->
    {{ title || '选择图标' }}
  </a-button>
  <a-modal
    :title="title"
    :visible="visible"
    @cancel="updateVisible"
    width="800px"
  >
    <div class="container">
      <div
        class="item"
        v-for="(item, index) in Object.keys(ArcoIcons)"
        :key="index"
      >
        <div>
          <component :is="item" style="cursor: pointer"></component>
        </div>
        <div>{{ camelToKebab(item).split('icon-')[1] }}</div>
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts">
export default {
  name: 'ChooseIcon'
}
</script>

<script setup lang="ts">
import * as ArcoIcons from '@arco-design/web-vue/es/icon'
import { camelToKebab } from 'jupiter-shared'

const props = defineProps<{
  title?: string
  visible?: boolean
}>()

const emits = defineEmits(['update:visible'])

const updateVisible = () => {
  // 修改父组件数据
  emits('update:visible', !props.visible)
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  .item {
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  svg {
    height: 1.5em;
    width: 1.5em;
  }
}
</style>
