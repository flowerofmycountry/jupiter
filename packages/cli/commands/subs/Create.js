const { Command } = require('../base/CommandBase')
const { input } = require('@inquirer/prompts')

class Create extends Command {
  constructor() {
    super('create', '创建一个新项目', [['[name]', '项目名称']])
  }

  async action(str, options) {
    let { name: projectName } = options

    if (!projectName) {
      projectName = await input({ message: '请输入项目名称：' })
    }

    const description = await input({ message: '请输入项目描述：' })
    const author = await input({ message: '请输入作者：' })
    const version = await input({ message: '请输入版本号：' })

    const gitRepoUrl = ''

    // clone 项目
    execSync(`git clone ${gitRepoUrl} ${projectName}`)

    // 当前命令执行路径
    const basePath = process.cwd()

    const packageJsonPath = path.join(basePath, projectName, 'package.json')
    const packageJson = require(packageJsonPath)

    packageJson.name = projectName
    packageJson.description = description
    packageJson.author = author
    packageJson.version = version

    // 删除 .get
    rmSync(path.join(basePath, projectName, '.git'), { recursive: true })

    // 重新写入 package.json
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

    // 安装依赖
    execSync(`cd ${projectName} && pnpm install`)
  }
}

module.exports = Create
