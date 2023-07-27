<template>
  <f-layout>
    <router-view></router-view>
    <template v-slot:menu>
      <router-menu></router-menu>
    </template>
    <template v-slot:header>
      <main-header name="JUPITER" :logo="jupiterUrl" />
    </template>
  </f-layout>
</template>

<script setup lang="ts">
import RouterMenu from '@/components/menu'
import MainHeader from '@/components/main-header/index.vue'
import jupiterUrl from '@/assets/jupiter.png'
// import { ref } from 'vue'

// const isLocal = ref(true)

// routeListener.listenerRouteChange((route) => {
//   const subPath = route.query['sub-app'] as string
//   isLocal.value = !subPath

//   if (isLocal.value) {
//   }
// })
</script>

<style scoped></style>
