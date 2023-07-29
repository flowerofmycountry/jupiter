# Jupiter(木星)

基于微前端架构的通用管理系统。

- `web/main` 主应用做权限管理相关业务
- `web/sub` 测试用子应用
- `packages/ui` 基于 **arco-design** 组件库的二次封装
- `packages/shared` 工具库
- `packages/hooks` 组合式 API
- `packages/cli` 脚手架用于生成新的子应用，及子应用通用 CRUD 页面
- `packages/eslint-config-custom` eslint 配置
- `packages/tsconfig` typescript 配置
- `mock-server` 基于 **lowdb** 和 **express** 的测试用后端服务

## 主要技术栈

- [x] [无界微前端](https://wujie-micro.github.io/doc/guide/) - 无界微前端框架
- [x] [Vue](https://cn.vuejs.org/) - 渐进式 JavaScript 框架
- [x] [arco-design](https://arco.design/vue/docs/start) - 一套企业级 UI 设计语言和 Vue 实现
- [x] [pnpm](https://pnpm.io/motivation) - 快速、零安装的 npm 替代方案
- [x] [turborepo](https://turbo.build/repo/docs) - 一键管理多个 npm 项目
- [x] [vite](https://vitejs.dev/) - 下一代前端开发与构建工具
- [x] ...

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
