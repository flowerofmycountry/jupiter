// 业务异常
export function error(code: number, msg: string) {
  return {
    code,
    msg
  }
}

export function success(data: unknown) {
  return {
    code: 20000,
    msg: 'success',
    data
  }
}

export function listSuccess(
  current: number,
  total: number,
  size: number,
  records: any[]
) {
  return {
    code: 20000,
    msg: 'success',
    data: {
      current,
      total,
      size,
      records
    }
  }
}
