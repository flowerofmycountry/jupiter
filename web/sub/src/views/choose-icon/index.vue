<template>
  <div class="sub-page-container">
    <f-action-bar :items="['CRUD']"></f-action-bar>
    <a-card>
      <f-choose-icon title="选择图标" v-model:visible="visible"></f-choose-icon>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<style lang="scss" scoped></style>
