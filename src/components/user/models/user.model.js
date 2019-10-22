export default function UserModel(ctx) {
  const {
    DB: { QueryBuilder, Model }
  } = ctx

  class UserQueries extends QueryBuilder {
    findUsers(req) {
      return this.where({ status: 1 }).select('name')
    }
    createUser(req) {
      return this.insert({ name: req.body.name })
    }
  }

  return class User extends Model {
    static get QueryBuilder() {
      return UserQueries
    }

    static tableName = 'users'
  }
}
