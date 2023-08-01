export type RoleType = '' | '*' | 'admin' | 'user'

export type Project = {
  id: number
  name: string
  title: string
  baseName: string
  host: string
}

export interface UserState {
  name?: string
  avatar?: string
  job?: string
  organization?: string
  location?: string
  email?: string
  introduction?: string
  personalWebsite?: string
  jobName?: string
  organizationName?: string
  locationName?: string
  phone?: string
  registrationDate?: string
  accountId?: string
  certification?: number
  projects?: Project[]
  /** 只用来做显示，前端不会用来做权限判断 */
  role: RoleType
}
