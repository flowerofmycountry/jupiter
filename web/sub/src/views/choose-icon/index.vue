<template>
  <f-choose-icon title="选择图标" v-model:visible="visible"></f-choose-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<style lang="scss" scoped></style>
