function componentOneRoutes(prefix) {
  const _ctrl = require("./componentOne.controller");
  const { routePrefix } = require("../../utils");
  const openRouter = routePrefix();

  return (open, closed) => {
    open("/index").get(_ctrl.doSomething);

    closed("/index").get(_ctrl.doSomethingElse);
  };
}

module.exports = componentOneRoutes("/one");
