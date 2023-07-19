import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash'
import defaultData from './db.json' assert { type: 'json' }

type Data = {
  menus: {
    id: number
    projectId: number
  }[]
}

// Extend Low class with a new `chain` field
class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
}

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Data>('db.json')

export default new LowWithLodash(adapter, defaultData)
