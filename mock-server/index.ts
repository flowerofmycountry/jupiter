import express from 'express'
import db from './db.js'
import { get as menutGet } from './controllers/menu/index.js'
import {
  list as crudList,
  get as crudGet,
  create as crudCreate,
  del as crudDel,
  update as crudUpdate
} from './controllers/crud/index.js'

const app: express.Application = express()

app.use(express.json()) // for parsing application/json

// 业务异常
function error(code: number, msg: string) {
  return {
    code,
    msg
  }
}

function success(data: unknown) {
  return {
    code: 20000,
    msg: 'success',
    data
  }
}

// 看token是否有效
app.use('/api', function (req, res, next) {
  const token = req.headers.authorization as string

  // 需要登录
  if (!token) return res.json(error(50008, 'token 不合法!'))

  // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

  // token过期
  if (!redisTokens.includes(token))
    return res.json(error(50014, 'token 过期！'))

  Object.assign(req, { token: token.split(' ')[1] })

  next()
})

app.post('/api/user/info', function (req, res, next) {
  // 这里根据 token 获取用户信息
  // 通过用户信息获取响应权限
  const { token } = req as any
  const userInfo = db.chain.get('users').find({ token }).value()

  return res.json(
    success({
      ...userInfo,
      projects: db.chain
        .get('projects')
        .filter(({ id }) => userInfo.projects.includes(id))
        .value()
    })
  )
})

app.get('/api/user/menu/:id', menutGet)

app.get('/api/crud', crudList)
app.post('/api/crud', crudCreate)
app.put('/api/crud', crudUpdate)
app.delete('/api/crud/:id', crudDel)
app.get('/api/crud/:id', crudGet)

var redisTokens = ['Bearer 1234567890', 'Bearer abcdefghij']

// sso login，获取tiket
app.post('/login', function (req, res, next) {
  const { username, password } = req.body

  // check username and password
  const result = db.chain.get('login').find({ username, password }).value()
  if (!result) {
    return res.json(error(40001, '用户名或密码错误'))
  }
  return res.json(success(result))
})

app.use(function (err: any, req: any, res: any, next: any) {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500)
  res.send({ error: err.message })
})

app.use(function (req, res) {
  res.status(404)
  res.send({ error: "Sorry, can't find that" })
})

app.listen(3838)
console.log('Express started on port 3838')
