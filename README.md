# Jupiter(木星)

基于微前端架构的通用管理系统。

- `web/main` 主应用做权限管理相关业务
- `web/sub` 测试用子应用
- `packages/ui` 基于 **arco-design** 组件库的二次封装
- `packages/shared` 工具库
- `packages/hooks` 工具库
- `packages/cli` 脚手架用于生成新的子应用，及子应用通用 CRUD 页面
- `mockserver` 基于 **lowdb** 和 **express** 的测试用后端服务

## 主要技术栈

- [x] [无界微前端](https://wujie-micro.github.io/doc/guide/)
- [x] [Vue](https://cn.vuejs.org/)
- [x] [arco-design](https://arco.design/vue/docs/start)

## 本地运行

克隆项目

```bash
  git clone https://github.com/flowerofmycountry/jupiter.git
```

进入项目目录

```bash
  cd jupiter
```

安装依赖

```bash
  pnpm i
```

启动服务

```bash
  pnpm dev
```

浏览器访问：[http://localhost:3001/main-app/home](http://localhost:3001/main-app/home)
