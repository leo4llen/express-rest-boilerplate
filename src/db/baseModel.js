import { Model, snakeCaseMappers } from 'objection'
import BaseQueryBuilder from './queryBuilder'
const knex = require('knex')(require('../../knexfile'))

export default function BaseModel(ctx) {
  const {
    LOG: { info, error }
  } = ctx

  knex
    .raw('select 1+1 as result')
    .then(_ => {
      info('DB connected')
    })
    .catch(e => {
      error(e)
      process.exit(1)
    })

  Model.knex(knex)
  return class BaseModel extends Model {
    static get columnNameMappers() {
      return snakeCaseMappers()
    }

    static get QueryBuilder() {
      return BaseQueryBuilder
    }
  }
}
