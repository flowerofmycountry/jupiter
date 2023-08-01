import { TableColumnData } from '@arco-design/web-vue'

export default [
  {
    dataIndex: 'name',
    title: '姓名'
  },
  {
    dataIndex: 'age',
    title: '年龄'
  },
  {
    dataIndex: 'address',
    title: '地址'
  },
  {
    dataIndex: 'email',
    title: '邮箱'
  },
  {
    dataIndex: 'operations',
    title: '操作',
    slotName: 'operations'
  }
] as TableColumnData[]
