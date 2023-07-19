#!/usr/bin/env node

const { Command } = require('commander')
const { commands } = require('../commands')
const program = new Command()

program.name('jupiter').description('前端项目脚手架工具').version('1.0.0')

commands.forEach(c => {
  const commandDef = c.definition()

  const subCommand = program
    .command(commandDef.command)
    .description(commandDef.description)

  commandDef.arguments.forEach(arg => {
    subCommand.argument(arg[0], arg[1])
  })

  commandDef.options.forEach(o => {
    subCommand.option([o[0], o[1]].join(','), o[2], o[3])
  })
  subCommand.action(function () {
    c.action.apply(c, arguments)
    console.log(c.getResult())
  })
})

// program
//   .command('create')
//   .description('创建一个新项目')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action(async (str, options) => {
//     console.log(input)
//     const answer = await input({ message: 'Enter your name' })
//     console.log(answer)
//   })

// program
//   .command('page')
//   .description('创建一个新页面')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action(async (str, options) => {
//     console.log(input)
//     const answer = await input({ message: 'Enter your name' })
//     console.log(answer)
//   })

program.parse()
