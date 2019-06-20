require('dotenv')

const { fail } = require('../../utils').response

function authentication() {
  const methods = {
    verifyToken: async (req, res, next) => {
      let token = req.headers['x-access-token']

      if (!token) return fail(res, 401, 'Access token missing')
      // Replace real time auth logic here
      if (token === 'ValidTestToken') {
        next()
      } else {
        return fail(res, 401, 'Invalid/Expired access token')
      }
    }
  }
  return Object.freeze(methods)
}
module.exports = authentication()
