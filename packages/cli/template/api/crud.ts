import axios from 'axios'
import { PagingQueryParams, PagingQueryResult } from 'jupiter-hoooks'

export interface Crud {
  id: number
  name: string
  age: number
  address: string
  [key: string]: any
}

// 分页
export function list(params: PagingQueryParams) {
  return axios.get<PagingQueryResult<Crud>>('/api/crud', { params })
}

// 增
export function create(data: Partial<Crud>) {
  return axios.post<any>('/api/crud', data)
}

// 删
export function del(id: number) {
  return axios.delete<any>(`/api/crud/${id}`)
}

// 改
export function update(data: Partial<Crud>) {
  return axios.put<any>('/api/crud', data)
}

// 查
export function get(id: number) {
  return axios.get<any>(`/api/crud/${id}`)
}
