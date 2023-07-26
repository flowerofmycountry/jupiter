<template>
  <f-layout name="JUPITER" :logo="jupiterUrl">
    <router-view></router-view>
    <template v-slot:menu>
      <router-menu></router-menu>
    </template>
  </f-layout>
</template>

<script setup lang="ts">
import RouterMenu from '@/components/menu'
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
