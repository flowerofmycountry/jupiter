const { Command } = require('../base/CommandBase')
const { input } = require('@inquirer/prompts')
const { join, dirname } = require('path')
const { mkdirSync, readFileSync, existsSync, writeFileSync } = require('fs')
const { readFilesSync } = require('../../utils/fileHelper')

class Page extends Command {
  constructor() {
    super('page', '创建一个新页面', [['[name]', '页面英文名称']])
  }

  async action(str, options) {
    // 当前命令执行路径
    const cwd = process.cwd()

    // 判断执行路径下有无 package.json 文件
    if (!existsSync(join(cwd, 'package.json'))) {
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

    // 读取文件下所有文件，包括子文件夹
    const files = readFilesSync(join(__dirname, '../../template/'))

    console.log(files)

    // 遍历文件
    files.forEach(file => {
      // 读取文件内容
      const fileContent = readFileSync(file.filepath, 'utf-8')

      // 替换文件内容
      const newFileContent = fileContent
        .replace(/crud-demo/g, pageName)
        .replace(/CRUD示例/g, pageCNName)

      const newPath = file.relativePath.replace('crud', pageName)

      // 写入文件
      mkdirSync(dirname(newPath), { recursive: true })
      writeFileSync(join(cwd, 'src', newPath), newFileContent, { flag: 'w+' })
    })
  }
}

module.exports = Page
