<template>
  <a-button @click="updateVisible">
    <!-- button显示文本 -->
    {{ title || '选择图标' }}
  </a-button>
  <a-modal
    :title="title"
    :visible="visible"
    @cancel="updateVisible"
    :width="800"
  >
    <a-row :gutter="5">
      <a-col v-for="item in iconList" :key="item" :span="4">
        <div class="item">
          <!-- <component :is="item" style="cursor: pointer" :></component> -->
          <span>
            <icon-font :type="item" :size="30" />
          </span>

          <span style="font-size: xx-small">{{ item }}</span>
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script setup lang="ts">
// import * as ArcoIcons from '@arco-design/web-vue/es/icon'
// import { camelToKebab } from 'jupiter-shared'
import { Icon } from '@arco-design/web-vue'

const iconList = [
  'icon-xitongcaidan',
  'icon-moban',
  'icon-role',
  'icon-moon-full-moon',
  'icon-Moon-',
  'icon-zujianku-tubiao',
  'icon-jurassic_user',
  'icon-jiekou'
]

const IconFont = Icon.addFromIconFontCn({
  src: 'https://at.alicdn.com/t/c/font_4192104_746num9zw2j.js'
})

console.log(IconFont)

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
// .container {
//   display: flex;
//   flex-wrap: wrap;
//   height: 500px;
//   .item {
//     width: 20%;
//     height: 100px;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     flex-direction: column;
//   }

//   svg {
//     height: 1.5em;
//     width: 1.5em;
//   }
// }
</style>
