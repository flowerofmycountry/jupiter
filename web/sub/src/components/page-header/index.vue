<template>
  <f-action-bar :items="locales"></f-action-bar>
</template>

<script setup lang="ts">
import useRouteLocales from '@/hooks/useRouteLocales'
const { locales } = useRouteLocales()
</script>

<style scoped></style>
