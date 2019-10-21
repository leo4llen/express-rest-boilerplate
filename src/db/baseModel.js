import { Model } from 'objection'
import BaseQueryBuilder from './queryBuilder'
const knex = require('knex')(require('../../knexfile'))

export default function BaseModel(ctx) {
  const {
    LOG: { log }
  } = ctx

  knex
    .raw('select 1+1 as result')
    .then(_ => {
      log('DB connected')
    })
    .catch(e => {
      console.log(e)
      process.exit(1)
    })

  Model.knex(knex)
  return class BaseModel extends Model {
    static get QueryBuilder() {
      return BaseQueryBuilder
    }
  }
}
