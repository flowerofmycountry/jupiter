import { FormOption } from 'jupiter-uii'

const options: FormOption[] = [
  {
    field: 'name',
    label: '姓名',
    type: 'input',
    value: '',
    validateTrigger: 'blur',
    attrs: {
      placeholder: '请输入姓名',
      allowClear: true
    },
    rules: [
      {
        required: true,
        maxLength: 10,
        message: '请输入姓名(10位以内)'
      }
    ]
  },
  {
    field: 'age',
    label: '年龄',
    type: 'input-number',
    value: 18,
    rules: [
      {
        type: 'number',
        required: true,
        message: '请输入年龄'
      }
    ]
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
    },
    rules: [
      {
        required: true,
        message: '请输选择地址'
      }
    ]
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
    ],
    rules: [
      {
        required: true,
        message: '请输选择邮箱'
      }
    ]
  },
  {
    field: 'password',
    label: '密码',
    type: 'input-password',
    value: '',
    validateTrigger: 'blur',
    attrs: {
      allowClear: true
    }
  },
  {
    field: 'job1',
    label: '职位',
    type: 'select',
    value: 1,

    attrs: {
      style: {
        width: '300px'
      }
    },
    children: [
      { type: 'option', attrs: { label: '前端', value: 1 } },
      {
        type: 'option',
        attrs: { label: '后端', value: 2 }
      }
    ]
  },
  {
    field: 'like',
    value: [],
    type: 'checkbox-group',
    label: '爱好',
    children: [
      {
        type: 'checkbox',
        attrs: {
          label: '篮球',
          value: 'basketball'
        }
      },
      {
        type: 'checkbox',
        attrs: {
          label: '足球',
          value: 'football'
        }
      },
      {
        type: 'checkbox',
        attrs: {
          label: '羽毛球',
          value: 'badminton'
        }
      }
    ]
  },
  {
    field: 'sex',
    value: 'male',
    type: 'radio-group',
    label: '性别',
    children: [
      {
        type: 'radio',
        attrs: {
          label: '男',
          value: 'male'
        }
      },
      {
        type: 'radio',
        attrs: {
          label: '女',
          value: 'female'
        }
      }
    ]
  },
  {
    field: 'birth',
    label: '出生日期',
    type: 'date-picker',
    value: ''
  },
  {
    field: 'sleep',
    label: '睡觉时间',
    type: 'range-picker',
    value: [],
    attrs: {
      showTime: true
    }
  },
  {
    field: 'upload',
    value: [],
    label: '上传',
    type: 'upload',
    attrs: {
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      draggable: true
    }
  },
  {
    field: 'comment',
    value: '<p>测试</p>',
    label: '评论',
    type: 'editor',
    rules: [
      {
        required: true,
        message: '请输入评论'
      }
    ],
    attrs: {
      placeholder: '请输入评论'
    }
  }
]

export default options
