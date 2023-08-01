const { ast, query } = require('@phenomnomnominal/tsquery')
const { factory } = require('typescript')

const typescript = `

import a from './a'
import b from './b'

export default [a, b]

`
const importC = factory.createImportDeclaration(
  undefined,
  factory.createImportClause(false, factory.createIdentifier('c'), undefined),
  factory.createStringLiteral('./c'),
  undefined
)

const aa = ast(typescript)
const nodes = query(aa, 'ExportAssignment')
const nodes2 = query(nodes, ':last-child')
console.log(nodes2) // 2
