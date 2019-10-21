export default function userCtrl(ctx) {
  const {
    RESPONSE: { success, internalError }
  } = ctx
  const methods = {
    async create(req, res) {
      try {
        return success(res)
      } catch (e) {
        return internalError(res, e)
      }
    },
    async read(req, res) {
      try {
      } catch (e) {}
    },
    async update(req, res) {
      try {
      } catch (e) {}
    },
    async delete(req, res) {}
  }
  return Object.freeze(methods)
}
