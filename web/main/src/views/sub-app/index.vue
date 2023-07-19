<template>
  <wujie-vue
    width="100%"
    height="100%"
    :name="name"
    :url="url"
    sync
    :beforeLoad="beforeLoad"
    :beforeMount="beforeMount"
    :afterMount="afterMount"
    :beforeUnmount="beforeUnmount"
    :afterUnmount="afterUnmount"
    :plugins="plugins"
  ></wujie-vue>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useActiveSubStore } from '@/store'
import { watch, ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
// import { IframeHTMLAttributes } from 'vue'

const route = useRoute()
const activeSubStore = useActiveSubStore()
const name = ref('')
const url = ref('')
// const url = computed(() => activeSubStore.host + route.path)
// const name = computed(() => activeSubStore.name)

// watchEffect

watch(
  route,
  to => {
    if (activeSubStore.name && to.name === 'sub-app') {
      name.value = activeSubStore.name
      url.value = activeSubStore.host + to.path
    }
  },
  {
    immediate: true
  }
)

const plugins = [
  {
    patchElementHook(element: Element, iframeWindow: Window) {
      // https://github.com/Tencent/wujie/issues/434#issuecomment-1614089196
      if (element.nodeName === 'STYLE') {
        element.insertAdjacentElement = function (_position, ele) {
          iframeWindow.document.head.appendChild(ele)
          return null
        }
      }
    },
    cssAfterLoaders: [
      {
        content: `
        /* 主应用 cssAfterLoaders 插件注入 */
        body {
          position: relative !important;
          overflow: visible !important;
          width: 100% !important;
        }
        `
      }
    ]
  }
]

const beforeLoad = () => {
  console.log('wujie---------------beforeLoad')
}

const beforeMount = () => {
  console.log('wujie---------------beforeMount')
}

const afterMount = () => {
  console.log('wujie---------------afterMount')
}

const beforeUnmount = () => {
  console.log('wujie---------------beforeUnmount')
}

const afterUnmount = () => {
  console.log('wujie---------------afterUnmount')
}

onMounted(() => {
  console.log('vue---------------onMounted')
})

onUnmounted(() => {
  console.log('vue---------------onUnmounted')
})

// console.log(activeSubStore)
</script>

<style lang="scss" scoped></style>
