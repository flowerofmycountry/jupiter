<template>
  <div class="sub-page-container">
    <page-header />
    <a-card class="general-card">
      <f-search-form
        :options="fields"
        :cols="3"
        @search="search"
        @reset="reset"
      ></f-search-form>
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
import { ref } from 'vue'
import {
  TableFeatureBar as FTableFeatureBar,
  SearchForm as FSearchForm
} from 'jupiter-uii'
import { useTable } from 'jupiter-hoooks'
import PageHeader from '@/components/page-header/index.vue'
import type { Crud } from '@/api/crud'
import { list, del } from '@/api/crud'
import FormModal from './form-modal.vue'
import columns from './columns'
import fields from './searchFields'

const modalRef = ref<InstanceType<typeof FormModal>>()

const {
  renderData,
  loading,
  pagination,
  handlePageChange,
  handlePageSizeChange,
  fetchData
} = useTable<Crud>(list)

const search = (params: Record<string, any>) => {
  fetchData({
    current: 1,
    ...params
  })
}

const reset = () => {
  fetchData({
    current: 1
  })
}

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

<style scoped lang="less"></style>
