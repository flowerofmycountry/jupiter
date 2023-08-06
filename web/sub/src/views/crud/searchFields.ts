import type { SearchFormOption } from 'jupiter-uii'
import { h } from 'vue'
import { IconCalendar } from '@arco-design/web-vue/es/icon'

const options: SearchFormOption[] = [
  {
    field: 'name',
    label: '姓名',
    type: 'input',
    required: true
  },
  {
    field: 'age',
    label: '年龄',
    type: 'input-number',
    required: true
  },
  {
    field: 'address',
    label: '地址',
    type: 'cascader',
    attrs: {
      options: [
        {
          value: 'beijing',
          label: 'Beijing',
          children: [
            {
              value: 'chaoyang',
              label: 'ChaoYang',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli'
                }
              ]
            },
            {
              value: 'haidian',
              label: 'Haidian'
            },
            {
              value: 'dongcheng',
              label: 'Dongcheng'
            },
            {
              value: 'xicheng',
              label: 'Xicheng',
              children: [
                {
                  value: 'jinrongjie',
                  label: 'Jinrongjie'
                },
                {
                  value: 'tianqiao',
                  label: 'Tianqiao'
                }
              ]
            }
          ]
        },
        {
          value: 'shanghai',
          label: 'Shanghai',
          children: [
            {
              value: 'huangpu',
              label: 'Huangpu'
            }
          ]
        }
      ]
    }
  },
  {
    field: 'email',
    label: '邮箱',
    type: 'select',
    children: [
      {
        type: 'option',
        attrs: {
          value: 'qq',
          label: 'QQ'
        }
      },
      {
        type: 'option',
        attrs: {
          value: '163',
          label: '网易'
        }
      }
    ]
  },
  {
    field: 'time-picker',
    label: 'time-picker',
    type: 'time-picker'
  },
  {
    field: 'date-picker',
    label: 'date-picker',
    type: 'date-picker'
  },
  {
    field: 'range-picker',
    label: 'range-picker',
    type: 'range-picker'
  },
  {
    field: 'week-picker',
    label: 'week-picker',
    type: 'week-picker'
  },
  {
    field: 'quarter-picker',
    label: 'quarter-picker',
    type: 'quarter-picker'
  },
  {
    field: 'year-picker',
    label: 'year-picker',
    type: 'year-picker'
  },
  {
    field: 'month-picker',
    label: 'month-picker',
    type: 'month-picker'
  },
  {
    field: 'tree-select',
    label: 'tree-select',
    type: 'tree-select',
    attrs: {
      data: [
        {
          key: 'node1',
          icon: () => h(IconCalendar),
          title: 'Trunk',
          disabled: true,
          children: [
            {
              key: 'node2',
              title: 'Leaf'
            }
          ]
        },
        {
          key: 'node3',
          title: 'Trunk2',
          icon: () => h(IconCalendar),
          children: [
            {
              key: 'node4',
              title: 'Leaf'
            },
            {
              key: 'node5',
              title: 'Leaf'
            }
          ]
        }
      ]
    }
  }
]

export default options
