<template>
  <div v-if="!isMicroApp">
    <f-layout>
      <router-view></router-view>
      <template v-slot:menu>
        <router-menu></router-menu>
      </template>
      <template v-slot:header>
        <main-header name="IO" :logo="ioUrl" />
      </template>
    </f-layout>
  </div>
  <div v-else style="height: 100%"><router-view></router-view></div>
</template>

<script setup lang="ts">
import { Layout as FLayout } from 'jupiter-uii'
import RouterMenu from '@/components/menu'
import MainHeader from '@/components/main-header/index.vue'
import ioUrl from '@/assets/io-moon.png'

console.log(ioUrl)

const isMicroApp = !!window.__POWERED_BY_WUJIE__
</script>

<style scoped></style>
