## 如何创建一个 monorepo + tyepscript 项目

以本工程为例：

1. 创建 flowerofmycountry 文件夹
2. 在文件夹根目录下执行 `pnpm init` 初始话项目
3. `pnpm add -D typescript @types/node` 安装 typescript 和 node 类型
4. 创建 pnpm-workspace.yaml 文件，内容如下：

   ```yaml
   packages:
     - 'packages/*'
   ```

5. 创建 tsconfig.base.json 文件

   ```json
   {
     "compilerOptions": {
       "strict": true,
       "strictNullChecks": true,
       "esModuleInterop": true,
       "emitDecoratorMetadata": true,
       "experimentalDecorators": true,
       "noUnusedLocals": true,
       "skipLibCheck": true,
       "sourceMap": true,
       "jsx": "preserve",
       "moduleResolution": "node"
     }
   }
   ```

6. 创建实际的 tsconfig.json。要让它继承自我们上面创建的基础文件

   ```json
   {
     "extends": "./tsconfig.base.json"
   }
   ```

7. 创建 .prettierrc.js 文件，内容如下：

   ```js
   module.exports = {
     printWidth: 120, //每行长度
     tabWidth: 2, // 缩进长度
     semi: false, // 行尾分号
     singleQuote: true, // 单引号
     htmlWhitespaceSensitivity: 'ignore', // 忽略html中的空格，使用后行内元素可能会多出空格
     jsxSingleQuote: false, // jsx单引号
     bracketSpacing: true, // 花括号前后空格
     arrowParens: 'always', // 箭头函数参数括号
     proseWrap: 'always', // props换行，超出行宽折叠显示
   }
   ```

8. 创建 packages 文件夹，用于存放子项目

   - utils - 工具包
   - ui - 二次封装的组件库
   - cli - 项目脚手架
   - main - 主项目
   - sub - 子项目
