<template>
  <div class="f-layout">
    <a-layout style="height: 100%">
      <a-layout-header>
        <slot name="header"></slot>
      </a-layout-header>
      <a-layout>
        <a-layout-sider style="width: auto" breakpoint="lg">
          <slot name="menu"></slot>
        </a-layout-sider>
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<script setup lang="ts"></script>

<style scoped lang="less">
.f-layout {
  height: 100vh;
  .arco-layout-header {
    height: 60px;
  }

  .arco-layout-content {
    padding: 16px 20px;
    height: calc(100vh - 60px); /** 减号两边必有空格 */
    background-color: var(--color-fill-2);
  }
}
</style>
