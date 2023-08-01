const { Command } = require('../base/CommandBase')
const { input } = require('@inquirer/prompts')
const { execSync } = require('child_process')
const { replaceTextInFile } = require('../../utils/fileHelper')
const { join } = require('path')
const { writeFileSync, rmSync } = require('fs')

class Create extends Command {
  constructor() {
    super('create', '创建一个新项目', [['[name]', '项目名称']])
  }

  async action(str, options) {
    let projectName = str

    if (!projectName) {
      projectName = await input({ message: '请输入项目名称：' })
    }

    const description = await input({ message: '请输入项目描述：' })
    const author = await input({
      message: '请输入作者：',
      default: 'jupiter'
    })
    const version = await input({ message: '请输入版本号：', default: '1.0.0' })

    const gitRepoUrl = 'https://github.com/flowerofmycountry/europa.git'

    // clone 项目
    execSync(`git clone ${gitRepoUrl} ${projectName}`)

    // 当前命令执行路径
    const basePath = process.cwd()

    const packageJsonPath = join(basePath, projectName, 'package.json')
    const packageJson = require(packageJsonPath)

    packageJson.name = projectName
    packageJson.description = description
    packageJson.author = author
    packageJson.version = version

    // 删除 .get
    rmSync(join(basePath, projectName, '.git'), { recursive: true })

    // 重新写入 package.json
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

    // 替换子应用标识
    replaceTextInFile(
      join(basePath, projectName, 'src/router/index.ts'),
      'europa',
      projectName
    )

    // 安装依赖
    execSync(`cd ${projectName} && pnpm install`)
  }
}

module.exports = Create
