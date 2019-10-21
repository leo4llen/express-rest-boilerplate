export default function UserModel(ctx) {
  const {
    DB: { QueryBuilder, Model }
  } = ctx

  class UserQueries extends QueryBuilder {
    findUsers(req) {
      this.where({ status: 1 }).select('id', 'name', 'age')
    }
  }

  return class User extends Model {
    static get QueryBuilder() {
      return UserQueries
    }

    static tableName = 'users'
  }
}
