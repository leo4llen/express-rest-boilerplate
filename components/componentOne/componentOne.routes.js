function componentOneRoutes() {
  const ctrl = require("./componentOne.controller");
  const { routePrefix } = require("../../utils");

  return (open, closed) => {
    open("/index").get(ctrl.doSomething);

    closed("/index").get(ctrl.doSomethingElse);
  };
}

module.exports = componentOneRoutes();
