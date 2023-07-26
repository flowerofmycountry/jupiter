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
        <a-grid-item class="demo-item" :span="1">
          <a-select :style="{ width: '194px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
        </a-grid-item>
        <a-grid-item class="demo-item" :span="1">
          <a-time-picker style="width: 194px" />
        </a-grid-item>
        <a-grid-item class="demo-item" :span="2">
          <a-pagination :total="200" show-page-size />
        </a-grid-item>
        <a-grid-item class="demo-item" :span="2">
          <a-range-picker
            style="width: 360px; margin: 0 24px 24px 0"
            show-time
            :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
            format="YYYY-MM-DD HH:mm"
          />
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
        <a-grid-item class="demo-item" :span="1">
          <a-select :style="{ width: '194px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
        </a-grid-item>
        <a-grid-item class="demo-item" :span="1">
          <a-time-picker style="width: 194px" />
        </a-grid-item>
        <a-grid-item class="demo-item" :span="2">
          <a-pagination :total="200" show-page-size />
        </a-grid-item>
        <a-grid-item class="demo-item" :span="2">
          <a-range-picker
            style="width: 360px; margin: 0 24px 24px 0"
            show-time
            :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
            format="YYYY-MM-DD HH:mm"
          />
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
