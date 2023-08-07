import { Message } from '@arco-design/web-vue'
import { computed, Ref, ref } from 'vue'
import { FormModalOptions, ActionType } from '../types'

const TitleMap = {
  add: '新增',
  edit: '编辑',
  view: '查看'
}

export default function useFormModal(options: FormModalOptions) {
  const visible = ref(false)
  const mode: Ref<ActionType> = ref('add')
  const readonly = ref(false)
  // const form = ref(options.resetForm())
  const formModalRef = ref<any>()

  // 出入参转换
  options.formatInParams = options.formatInParams || (row => row)
  options.formatOutParams = options.formatOutParams || (row => row)

  // 数据回填
  const fillBackForm = (row: Record<string, any>) => {
    if (options.$api.detail) {
      options.$api.detail(row.id).then((res: any) => {
        formModalRef.value?.setFormData(
          options.formatOutParams!({
            ...row,
            ...res.data
          })
        )
        // form.value = options.formatOutParams!({
        //   ...row,
        //   ...res.data
        // })
      })
    } else {
      formModalRef.value?.setFormData(options.formatOutParams!(row))
      // form.value = options.formatOutParams!(row)
    }
  }

  const formModalTitle = computed(() => {
    return (options.name ?? '') + TitleMap[mode.value]
  })

  const setVisible = (show: boolean) => {
    visible.value = show
    if (visible.value) {
      options.beforeOpen && options.beforeOpen()
      formModalRef.value?.clearValidate()
    }
  }

  const editWithMode = (currentMode: ActionType) => {
    mode.value = currentMode
    setVisible(true)
    readonly.value = false
  }

  const add = () => {
    editWithMode('add')
    formModalRef.value?.resetFields()
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
    formModalRef,
    formModalTitle,
    add,
    edit,
    view,
    handleBeforeOk(done: any) {
      formModalRef.value?.validate((errors: any) => {
        if (errors) {
          done(false)
        } else {
          const updateAction = ['edit', 'update'].includes(mode.value)
            ? options.$api.update
            : null

          const action = ['add', 'insert'].includes(mode.value)
            ? options.$api.insert
            : updateAction

          action &&
            action(options.formatInParams!(formModalRef.value?.getFormData()))
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
