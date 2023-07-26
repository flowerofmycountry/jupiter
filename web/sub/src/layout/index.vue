<template>
  <div v-if="!isMicroApp">
    <f-layout name="IO" :logo="ioUrl">
      <router-view></router-view>
      <template v-slot:menu>
        <router-menu></router-menu>
      </template>
    </f-layout>
  </div>
  <div v-else style="height: 100%"><router-view></router-view></div>
</template>

<script setup lang="ts">
import RouterMenu from '@/components/menu'
import ioUrl from '@/assets/io-moon.png'

console.log(ioUrl)

const isMicroApp = !!window.__POWERED_BY_WUJIE__
</script>

<style scoped></style>
