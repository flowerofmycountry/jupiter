import db from './db.js'
import { success } from '../../common/result.js'

export const get = function (req: any, res: any, next: any) {
  // 根据project id 获取菜单
  // 和项目信息
  const id = +req.params.id
  // const project = db.chain.get('projects').find({ id }).value()
  const menus = db.chain.get('menus').filter({ projectId: id }).value()
  return res.json(success(menus))
}
