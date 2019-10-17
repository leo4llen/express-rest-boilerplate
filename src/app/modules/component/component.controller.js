const { error } = require('../../utils').logging
const { success, fail } = require('../../utils').response
function componentOneCtrl(model) {
  const methods = {
    doSomething: async (req, res) => {
      try {
        return success(res, 200, 'Route works')
      } catch (e) {
        error(e)
        return fail(res, 500)
      }
    },
    doSomethingElse: async (req, res) => {
      try {
        return success(res, 200, 'Route works')
      } catch (e) {
        error(e)
        return fail(res, 500)
      }
    }
  }
  return Object.freeze(methods)
}

module.exports = componentOneCtrl()
