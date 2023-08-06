<template>
  <div class="sub-page-container">
    <page-header></page-header>
    <a-card>
      <f-form :options="options" auto-label-width>
        <template #actions="{ form, model }">
          <a-space>
            <a-button type="primary" @click="onSubmit(form!, model)">
              提交
            </a-button>
            <a-button @click="onReset(form!)">重置</a-button>
          </a-space>
        </template>
      </f-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from '@arco-design/web-vue'
import { Form as FForm } from 'jupiter-uii'
import type { FormOptions } from 'jupiter-uii'
import PageHeader from '@/components/page-header/index.vue'

const options: FormOptions[] = [
  {
    field: 'username',
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
    field: 'password',
    label: '密码',
    type: 'input-password',
    value: '',
    validateTrigger: 'blur',
    attrs: {
      allowClear: true
    },
    rules: [
      {
        required: true,
        message: '必填'
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
    field: 'job1',
    label: '职位',
    type: 'select',
    value: 1,
    rules: [
      {
        required: true,
        message: '请选择职位'
      }
    ],
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

const onSubmit = async (form: FormInstance, formModel: any) => {
  const errors = await form.validate()

  if (!errors) {
    console.log(formModel)
  }
}

const onReset = (form: FormInstance) => {
  form.resetFields()
}
</script>

<style scoped></style>
