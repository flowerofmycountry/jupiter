<template>
  <a-button @click="updateVisible">
    <!-- button显示文本 -->
    {{ title || '选择图标' }}
  </a-button>
  <a-modal
    :title="title"
    :visible="visible"
    :width="800"
    @cancel="updateVisible"
    @ok="onOk"
  >
    <a-row :gutter="5">
      <a-col v-for="(item, index) in iconList" :key="index" :span="4">
        <div
          class="item"
          :class="[{ 'item-clicked': item.clicked }]"
          @click="item.clicked = !item.clicked"
        >
          <!-- <component :is="item" style="cursor: pointer" :></component> -->
          <span>
            <icon-font :type="item.name" :size="30" />
          </span>

          <span style="font-size: xx-small">{{ item.name }}</span>
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@arco-design/web-vue'
import { ICONFONTURL } from '../../config'

const initData = () => {
  return [
    'icon-qipao',
    'icon-tongzhi',
    'icon-biaodan',
    'icon-moon-full',
    'icon-moon-half',
    'icon-front',
    'icon-tanchuang',
    'icon-jiekou',
    'icon-moban',
    'icon-role',
    'icon-tubiao',
    'icon-user',
    'icon-user-group'
  ].map(item => {
    return {
      name: item,
      clicked: false
    }
  })
}

const iconList = ref(initData())

const IconFont = Icon.addFromIconFontCn({
  src: ICONFONTURL
})

const props = defineProps<{
  title?: string
  visible?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'onComfirm', iconNames: string[]): void
}>()

const updateVisible = () => {
  iconList.value = initData()
  // 修改父组件数据
  emits('update:visible', !props.visible)
}

const onOk = () => {
  const result = iconList.value
    .filter(item => item.clicked)
    .map(item => item.name)
  emits('onComfirm', result)
  emits('update:visible', false)
}
</script>

<script lang="ts">
export default {
  name: 'ChooseIcon'
}
</script>

<style scoped lang="less">
.item {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  cursor: pointer;
}

.item-clicked {
  color: var(--color-primary-light-4);
}
</style>
