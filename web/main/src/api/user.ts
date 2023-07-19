import axios from 'axios'
import { UserState } from '@/store/modules/user/types'
import { ServerMenu } from '@/store/modules/app/types'

export interface LoginData {
  username: string
  password: string
}

export interface LoginRes {
  token: string
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/login', data)
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout')
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info')
}

export function getMenuList(id: number) {
  return axios.get<ServerMenu[]>(`/api/user/menu/${id}`)
}
