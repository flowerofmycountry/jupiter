import db from './crud.js'
import { success, listSuccess } from '../../common/result.js'
import asyncHandler from 'express-async-handler'

export const list = asyncHandler(async (req: any, res: any, next: any) => {
  const { current, size, name, age } = req.query
  const start = (current - 1) * size
  const end = current * size
  const list = db.chain
    .get('crud')
    .filter((item: any) => {
      if (name && item.name !== name) return false
      if (age && item.age !== age) return false
      return true
    })
    .value()

  //   const menus = db.chain.get('menus').filter({ projectId }).value()
  return res.json(
    listSuccess(
      current,
      list.length,
      size,
      list.slice(start, end).sort((a: any, b: any) => a.id - b.id)
    )
  )
})

export const create = asyncHandler(async (req: any, res: any, next: any) => {
  const { name, age, address, email } = req.body

  const id = db.chain.get('crud').last().value().id + 1

  db.chain.get('crud').push({ id, name, age, address, email }).value()

  await db.write()
  return res.json(success({ id }))
})

export const update = asyncHandler(async (req: any, res: any, next: any) => {
  const { id, name, age, address, email } = req.body

  db.chain
    .get('crud')
    .find({ id })
    .assign({ name, age, address, email })
    .value()

  await db.write()

  return res.json(success({ id }))
})

export const del = asyncHandler(async (req: any, res: any, next: any) => {
  const { id } = req.params
  db.chain
    .get('crud')
    .remove({ id: Number(id) })
    .value()

  await db.write()

  return res.json(success({ id }))
})

export const get = asyncHandler(async (req: any, res: any, next: any) => {
  const { id } = req.params
  const data = db.chain
    .get('crud')
    .find({ id: Number(id) })
    .value()

  return res.json(success(data))
})
