<template>
  <div class="sub-page-container">
    <f-action-bar :items="['CRUD']"></f-action-bar>
    <a-card class="general-card">
      <f-search-form :fields="fields" :form="searchForm"></f-search-form>
      <a-divider></a-divider>
      <f-table-feature-bar @add="add"></f-table-feature-bar>
      <a-table
        :data="renderData"
        :columns="columns"
        :loading="loading"
        :pagination="pagination"
        @page-change="handlePageChange"
        @page-size-change="handlePageSizeChange"
      >
        <template #operations="{ record }">
          <a-space>
            <a-button type="text" @click="edit(record)">编辑</a-button>
            <a-button type="text" @click="view(record)">查看</a-button>
            <a-popconfirm content="是否确认删除?" @ok="remove(record)">
              <a-button type="text">删除</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </a-table>
    </a-card>
    <form-modal ref="modalRef" :fetch-data="fetchData"></form-modal>
  </div>
</template>

<script setup lang="ts">
import FormModal from './form-modal.vue'
import type { Crud } from '@/api/crud'
import { list, del } from '@/api/crud'
import { useTable, useSearchForm } from 'jupiter-hoooks'
import columns from './columns'
import fields from './searchFields'
import { ref } from 'vue'

const modalRef = ref<InstanceType<typeof FormModal>>()

const {
  renderData,
  loading,
  pagination,
  handlePageChange,
  handlePageSizeChange,
  fetchData
} = useTable<Crud>(list)

const { searchForm } = useSearchForm(fields, fetchData)

const add = () => {
  modalRef.value?.add()
}

const edit = (record: Crud) => {
  modalRef.value?.edit(record)
}

const view = (record: Crud) => {
  modalRef.value?.view(record)
}

const remove = (record: Crud) => {
  del(record.id).then(() => {
    fetchData()
  })
}
</script>

<style scoped lang="less">
.sub-page-container {
}
</style>
