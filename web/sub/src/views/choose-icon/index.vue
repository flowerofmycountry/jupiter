<template>
  <div class="sub-page-container">
    <page-header></page-header>
    <a-card class="general-card">
      <ul>
        <li v-for="i in types" :key="i">
          <f-icon-font :type="i"></f-icon-font>
        </li>
      </ul>
      <a-divider></a-divider>
      <f-choose-icon
        v-model:visible="visible"
        title="选择图标"
        @on-comfirm="onComfirm"
      ></f-choose-icon>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChooseIcon as FChooseIcon, IconFont as FIconFont } from 'jupiter-uii'
import PageHeader from '@/components/page-header/index.vue'

const visible = ref(false)

const types = ref<string[]>()

const onComfirm = (names: string[]) => {
  types.value = names
}
</script>

<style lang="scss" scoped></style>
