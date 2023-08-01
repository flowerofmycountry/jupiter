const fs = require('fs')
const path = require('path')

// const getDirName = path.dirname

function readFilesSync(dir) {
  const files = []

  fs.readdirSync(dir).forEach(filename => {
    const name = path.parse(filename).name
    const ext = path.parse(filename).ext
    const filepath = path.resolve(dir, filename)
    const stat = fs.statSync(filepath)
    const isFile = stat.isFile()

    if (isFile) {
      files.push({
        filepath,
        relativePath: filepath.split('template')[1],
        name,
        ext,
        stat
      })
    } else {
      files.push(...readFilesSync(filepath))
    }
  })

  return files
}

module.exports = {
  replaceTextInFile(fileName, oldText, newText) {
    const fileContent = fs.readFileSync(fileName, 'utf-8')
    const newFileContent = fileContent.replace(
      new RegExp(oldText, 'g'),
      newText
    )
    fs.writeFileSync(fileName, newFileContent)
  },
  readFilesSync
  // writeFile
}
