class Command {
  /**
   * 命令基类
   * @description 命令基类，所有命令都必须继承该类，参数写法参考commander.js
   * {@link https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md}
   * @constructor
   * @param {*} name 命令名称
   * @param {*} descr 命令描述
   * @param {{}} [args=[]] 命令参数
   * @param {{}} [options=[]] 命令选项
   */
  constructor(name, descr, args = [], options = []) {
    this.command = name
    this.description = descr
    this.arguments = args
    this.options = options
    this.result = ''
  }

  getResult() {
    return this.result
  }

  definition() {
    return {
      command: this.command,
      description: this.description,
      arguments: this.arguments,
      options: this.options
    }
  }

  action() {
    throw Error('该方法必须被重写')
  }
}

module.exports.Command = Command
