import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash'
// import defaultData from './crud.json' assert { type: 'json' }
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

type Data = {
  crud: {
    id: number
    name: string
    age: number
    address: string
    email: string
  }[]
}

// Extend Low class with a new `chain` field
class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
}

const __dirname = dirname(fileURLToPath(import.meta.url))

const file = join(__dirname, '../../../controllers/crud/crud.json')

console.log(file)

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Data>(file)

const db = new LowWithLodash<Data>(adapter, { crud: [] })

await db.read()

export default db
