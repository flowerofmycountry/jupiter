import { Form, Message } from '@arco-design/web-vue'
import { computed, Ref, ref } from 'vue'
import { FormModalOptions, ActionType } from '../types'

export default function useFormModal(options: FormModalOptions) {
  const visible = ref(false)
  const mode: Ref<ActionType> = ref('add')
  const readonly = ref(false)
  const form = ref(options.resetForm())
  const formRef = ref<InstanceType<typeof Form> | null>(null)

  // 出入参转换
  options.formatInParams = options.formatInParams || (row => row)
  options.formatOutParams = options.formatOutParams || (row => row)

  // 数据回填
  const fillBackForm = (row: Record<string, any>) => {
    if (options.$api.detail) {
      options.$api.detail(row.id).then((res: any) => {
        form.value = options.formatOutParams!({
          ...row,
          ...res.data
        })
      })
    } else {
      form.value = options.formatOutParams!(row)
    }
  }

  const formTitle = computed(() => {
    return mode.value
  })

  const setVisible = (show: boolean) => {
    visible.value = show
    if (visible.value) {
      options.beforeOpen && options.beforeOpen()
      formRef.value?.clearValidate()
    }
  }

  const editWithMode = (currentMode: ActionType) => {
    mode.value = currentMode
    setVisible(true)
    readonly.value = false
  }

  const add = (row?: Record<string, any>) => {
    editWithMode('add')
    form.value = options.resetForm(row)
  }

  const copy = (row: Record<string, any>) => {
    editWithMode('copy')
    fillBackForm(row)
  }

  const edit = (row: Record<string, any>) => {
    editWithMode('edit')
    fillBackForm(row)
  }

  const view = (row: Record<string, any>) => {
    editWithMode('view')
    readonly.value = true
    fillBackForm(row)
  }

  return {
    visible,
    mode,
    readonly,
    form,
    formRef,
    formTitle,
    add,
    copy,
    edit,
    view,
    handleBeforeOk(done: any) {
      formRef.value?.validate((errors: any) => {
        if (errors) {
          done(false)
        } else {
          const action = ['add', 'copy'].includes(mode.value)
            ? options.$api.insert
            : ['edit', 'update'].includes(mode.value)
            ? options.$api.update
            : null

          action &&
            action(options.formatInParams!(form.value))
              .then(() => {
                done()
                Message.success('操作成功')
                options.onSuccess && options.onSuccess()
              })
              .catch(() => {
                done(false)
              })
        }
      })
    },
    handleCancel() {
      setVisible(false)
    }
  }
}
