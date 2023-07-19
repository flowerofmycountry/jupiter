const { Command } = require('../base/CommandBase')
const { input } = require('@inquirer/prompts')

class Page extends Command {
  constructor() {
    super('page', '创建一个新页面', [['[name]', '页面英文名称']])
  }

  async action(str, options) {
    // 当前命令执行路径
    const cwd = process.cwd()

    // 判断执行路径下有无 package.json 文件
    if (!fs.existsSync(path.join(cwd, 'package.json'))) {
      console.error(
        '当前目录下不存在 package.json 文件，请先执行 jupiter-cli create 命令创建项目'
      )
      return
    }

    let pageName = str

    if (!pageName) {
      pageName = await input({
        message: '请输入页面英文名称：',
        default: 'crud-demo'
      })
    }

    const pageCNName = await input({
      message: '请输入页面中文名称：',
      default: 'CRUD示例'
    })
    const menu = await input({ message: '请输入上级菜单英文名称：' })
    const menuCNName = await input({ message: '请输入上级菜单中文名称：' })

    console.log(pageName, pageCNName, menu, menuCNName)
  }
}

module.exports = Page
