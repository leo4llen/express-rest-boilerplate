import UserModels from './models'

export default function userCtrl(ctx) {
  const {
    RESPONSE: { success, internalError }
  } = ctx

  const { User } = UserModels(ctx)

  const methods = {
    async read(req, res) {
      try {
        let users = await User.query().findUsers(req)
        return success(res, 200, 'Users loaded successfully', users)
      } catch (e) {
        return internalError(res, e)
      }
    },
    async create(req, res) {
      try {
        await User.query().createUser(req)
        return success(res, 200, 'User inserted successfully')
      } catch (e) {
        return internalError(res, e)
      }
    }
  }
  return Object.freeze(methods)
}
