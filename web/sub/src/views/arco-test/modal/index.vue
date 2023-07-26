<template>
  <div class="sub-page-container">
    <page-header />
    <a-card class="general-card">
      <a-space>
        <a-button @click="modalVisible = !modalVisible">Modal 对话框</a-button>
        <a-button @click="drawerVisible = !drawerVisible">抽屉 Drawer</a-button>
      </a-space>
    </a-card>
    <a-modal v-model:visible="modalVisible">
      <template #title>Title</template>
      <div>
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </div>
    </a-modal>
    <a-drawer :width="340" v-model:visible="drawerVisible">
      <template #title>Title</template>
      <div>
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '@/components/page-header/index.vue'

const modalVisible = ref(false)
const drawerVisible = ref(false)
</script>

<style scoped lang="less"></style>
