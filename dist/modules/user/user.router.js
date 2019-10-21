"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userRouter;

function userRouter(ctx) {
  return function (open, closed) {
    open.route('/index').get(ctrl.doSomething);
    closed.route('/index').get(ctrl.doSomethingElse);
  };
}