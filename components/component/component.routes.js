function componentOneRoutes() {
  const ctrl = require('./component.controller')
  const { routePrefix } = require('../../utils')

  return (open, closed) => {
    open('/index').get(ctrl.doSomething)

    closed('/index').get(ctrl.doSomethingElse)
  }
}

module.exports = componentOneRoutes()
