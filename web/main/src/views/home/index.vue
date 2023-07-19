<template>
  <div class="project">
    <a-card
      class="project-item"
      v-for="(item, key) of projects"
      :key="key"
      @click="onProjectClick(item)"
    >
      {{ item.title }}
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore, useAppStore, useActiveSubStore } from '@/store'
import type { Project } from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()

const userStore = useUserStore()
const activeSubStore = useActiveSubStore()
const appStore = useAppStore()

const projects = userStore.projects!

const onProjectClick = async (item: Project) => {
  // 同步菜单
  const projectInfo = userStore.projects?.find(p => p.name === item.name)
  await appStore.fetchServerMenuConfig(projectInfo?.id)

  // 如果是本地应用
  if (item.id === 1) {
    router.push({
      name: 'home'
    })

    // 清楚激活应用
    activeSubStore.clearActive()
    return
  }

  // 激活应用
  await activeSubStore.setInfo(projectInfo!)

  router.push({
    name: 'sub-app',
    params: {
      projectName: item.name
    }
  })
}
</script>

<style scoped lang="less">
.project {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  > * {
    margin: 8px;
  }

  &-item {
    height: 100px;
    width: 200px;
  }
}
</style>
