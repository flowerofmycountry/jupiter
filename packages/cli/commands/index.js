const normalizedPath = require('path').join(__dirname, './subs')

let importedCommands = require('fs')
  .readdirSync(normalizedPath)
  .map(function (file) {
    const c = require('./subs/' + file)
    return new c()
  })

module.exports.commands = importedCommands
