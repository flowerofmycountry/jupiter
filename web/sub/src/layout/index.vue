<template>
  <div v-if="!isMicroApp">
    <f-layout :name="'祖国的花朵'">
      <router-view></router-view>
      <template v-slot:menu>
        <router-menu></router-menu>
      </template>
    </f-layout>
  </div>
  <div v-else><router-view></router-view></div>
</template>

<script setup lang="ts">
import RouterMenu from '@/components/menu'

const isMicroApp = !!window.__POWERED_BY_WUJIE__
</script>

<style scoped></style>
