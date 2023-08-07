<template>
  <div class="sub-page-container">
    <page-header />
    <a-card class="general-card">
      <f-search-form
        ref="searchFormRef"
        :options="fields"
        :cols="{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4
        }"
        @search="handleSearch"
        @reset="handleReset"
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
    <f-modal-form
      ref="formModalRef"
      v-model:visible="visible"
      :options="modalFields"
      width="80%"
      :body-style="{ height: '500px' }"
      :title="formModalTitle"
      @before-ok="handleBeforeOk"
      @cancel="handleCancel"
    ></f-modal-form>
  </div>
</template>

<script setup lang="ts">
import {
  TableFeatureBar as FTableFeatureBar,
  SearchForm as FSearchForm,
  ModalForm as FModalForm
} from 'jupiter-uii'
import { useCRUD } from 'jupiter-hoooks'
import PageHeader from '@/components/page-header/index.vue'
import type { Crud } from '@/api/crud'
import { list, del, create, update, get } from '@/api/crud'
import columns from './columns'
import fields from './searchFields'
import modalFields from './modalFields'

const {
  pagination,
  renderData,
  loading,
  fetchData,
  handlePageChange,
  handlePageSizeChange,
  setPagination,
  searchFormRef,
  handleSearch,
  handleReset,
  visible,
  mode,
  readonly,
  formModalRef,
  formModalTitle,
  add,
  edit,
  view,
  remove,
  handleBeforeOk,
  handleCancel
} = useCRUD<Crud>(list, create, del, update, get, '用户')
</script>

<style scoped lang="less"></style>
