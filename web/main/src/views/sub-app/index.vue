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
import { useActiveSubStore, useAppStore } from '@/store'
import { watch, ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
// import { IframeHTMLAttributes } from 'vue'

const appStore = useAppStore()
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
    jsBeforeLoaders: [
      {
        callback(appWindow: Window) {
          // 这里解决了无界切换页面后
          // body 下找不到 Arco Message 容器的报错
          // 所有类库 removeChild 未判断的异常都可以解决
          const subBody = appWindow.document.body
          const original = subBody.removeChild
          // @ts-ignore
          subBody.removeChild = function (node) {
            if (arguments[0].parentElement === this) {
              return original.apply(this, arguments as any)
            } else {
              return null
            }
          }
        }
      }
    ],
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

        .arco-message-list {
          left: 0px
        }
        `
      }
    ]
  }
]

// const themeHook = () => {
//   const activeSubStore = useActiveSubStore()
// const route = useRoute()

//     // 子应用适配
//     if (route.name === 'sub-app') {
//       const subBody = window.document.querySelector(
//         `iframe[name=${activeSubStore.name}]`
//       )?.contentWindow.document.body

//       if (subBody) {
//         if (dark) {
//           subBody.setAttribute('arco-theme', 'dark')
//         } else {
//           subBody.removeAttribute('arco-theme')
//         }
//       }
//     }
// }

const beforeLoad = () => {
  console.log('wujie---------------beforeLoad')
}

const beforeMount = () => {
  console.log('wujie---------------beforeMount')
}

const afterMount = () => {
  console.log('子应用加载完成。')

  if (route.name !== 'sub-app') return

  // 子应用适配
  const subBody = activeSubStore.activeBody!

  if (appStore.theme === 'dark') {
    subBody.setAttribute('arco-theme', 'dark')
  } else {
    subBody.removeAttribute('arco-theme')
  }
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
