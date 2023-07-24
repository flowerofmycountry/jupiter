import type { SearchField } from 'jupiter-hoooks'

export default [
  {
    key: 'name',
    label: '姓名',
    type: 'input',
    props: {
      required: true
    }
  },
  {
    key: 'age',
    label: '年龄',
    type: 'input'
  },
  {
    key: 'address',
    label: '地址',
    type: 'input'
  },
  {
    key: 'email',
    label: '邮箱',
    type: 'input',
    rules: [
      {
        type: 'email',
        message: '请输入正确格式邮箱'
      }
    ]
  }
] as SearchField[]
