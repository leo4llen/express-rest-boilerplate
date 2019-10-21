import { QueryBuilder } from 'objection'

export default function BaseQueryBuilder(ctx) {
  return class BaseQueryBuilder extends QueryBuilder {
    softDelete(id) {
      if (id) {
        return this.patch({ status: 3 }).findById(id)
      }
    }
    upsert(model) {
      if (model.id) {
        return this.update(model).where('id', model.id)
      } else {
        return this.insert(model)
      }
    }
  }
}
