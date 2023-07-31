<template>
  <div class="sub-page-container">
    <page-header></page-header>
    <a-card class="general-card">
      <f-choose-icon title="选择图标" v-model:visible="visible"></f-choose-icon>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChooseIcon as FChooseIcon } from 'jupiter-uii'
import PageHeader from '@/components/page-header/index.vue'
const visible = ref(false)
</script>

<style lang="scss" scoped></style>
