<template>
  <div class="sub-page-container">
    <page-header />
    <a-card class="general-card">
      <a-grid
        :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }"
        :colGap="12"
        :rowGap="16"
        class="grid-demo-grid"
      >
        <a-grid-item class="demo-item">
          <a-popover title="Title">
            <a-button>气泡卡片 Popover</a-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </a-popover>
        </a-grid-item>
        <a-grid-item class="demo-item" :span="4">item | span - 4</a-grid-item>
        <a-grid-item class="demo-item">
          <a-tooltip content="This is tooltip content">
            <a-button>文字气泡 Tooltip</a-button>
          </a-tooltip>
        </a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item" :span="6">item | span - 6</a-grid-item>
        <a-grid-item class="demo-item">
          <a-popover title="Title">
            <a-button>气泡卡片 Popover</a-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </a-popover>
        </a-grid-item>
        <a-grid-item class="demo-item" :span="4">item | span - 4</a-grid-item>
        <a-grid-item class="demo-item">
          <a-tooltip content="This is tooltip content">
            <a-button>文字气泡 Tooltip</a-button>
          </a-tooltip>
        </a-grid-item>
      </a-grid>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/page-header/index.vue'
</script>

<style scoped lang="less">
.grid-demo-grid {
  height: 100%;
  .demo-item {
    height: 48px;
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
  }
  .demo-item:nth-child(2n) {
    background-color: rgba(var(--arcoblue-6), 0.9);
  }

  .demo-item:nth-child(2n + 1) {
    background-color: var(--color-primary-light-4);
  }
}
</style>
