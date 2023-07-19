<template>
  <div class="header">
    <div class="icon">
      <icon-voice size="45" />
    </div>
    <div class="title">
      {{ name }}
    </div>
    <div class="toolBar"></div>
    <div class="avatar"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .toolBar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ccc;
  }
}
</style>
