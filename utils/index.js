function utils() {
  const { log } = require('./logging')

  const methods = {
    /** Add Decorator fn to prefix router path's
     * @param  {Object} router
     * @returns {Object} router
     */
    routePrefix: router => prefix => route => router.route.call(router, `${prefix}${route}`)
  }

  return Object.freeze(methods)
}

module.exports = utils()
