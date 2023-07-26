<template>
  <div class="sub-page-container">
    <page-header />
    <a-card class="general-card">
      <a-space>
        <a-button @click="onMsg">Message</a-button>
        <a-button @click="onNoti">Notification</a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { Message, Notification } from '@arco-design/web-vue'
import PageHeader from '@/components/page-header/index.vue'

const onMsg = () => {
  Message.info('测试 Message')
  Message.error('测试 Message')
  Message.loading('测试 Message')
  Message.success('测试 Message')
  Message.warning('测试 Message')
}

const onNoti = () => {
  Notification.info('测试 Notification')
  Notification.error('测试 Notification')
  Notification.success('测试 Notification')
  Notification.warning('测试 Notification')
}
</script>

<style scoped></style>
