import Model from './baseModel'
import QueryBuilder from './queryBuilder'

export default function DB(ctx) {
  ctx.DB = {
    Model: Model(ctx),
    QueryBuilder: QueryBuilder(ctx)
  }
  return ctx
}
