function utils() {
  const methods = {
    /** Decorator fn to prefix router path's
     * @param  {Function} router.route
     * @returns {Function}
     */
    routePrefix: router => prefix =>
      function(route) {
        return router.route.call(this, `${prefix}${route}`);
      }
  };

  return Object.freeze(methods);
}

module.exports = utils();
