import { AxiosResponse } from 'axios'

/**
 * 分页查询参数
 *
 * @export
 * @interface PagingQueryParams
 * @typedef {PagingQueryParams}
 */
export interface PagingQueryParams {
  /** 当前页码 */
  current: number

  /** 每页条数 */
  size?: number

  /** 其他查询条件 */
  [key: string]: any
}

/**
 * 分页查询结果
 *
 * @export
 * @interface PagingQueryResult
 * @typedef {PagingQueryResult}
 * @template T
 */
export interface PagingQueryResult<T> {
  /** 当前页码 */
  current: number
  /** 总条数 */
  total: number
  /** 每页条数 */
  size: number
  records: T[]
  [key: string]: any
}

export interface SearchField {
  key: string
  type: string
  label?: string
  placeholder?: string
  [key: string]: any
}

export interface FormModalOptions {
  name: string
  resetForm: (defaultParams?: Record<string, any>) => Record<string, any>
  beforeOpen?: () => void
  formatInParams?: (params: any) => any
  formatOutParams?: (params: any) => any
  onSuccess?: () => void
  $api: {
    insert?: (params: any) => Promise<any>
    detail?: (params: any) => Promise<any>
    update?: (params: any) => Promise<any>
  }
}

export type ActionType = 'add' | 'edit' | 'copy' | 'view' | string

export type PagingQueryApiType<T> = (
  param: PagingQueryParams
) => Promise<AxiosResponse<PagingQueryResult<T>, any>>

export type FetchDataApiType = (params?: PagingQueryParams) => Promise<void>
