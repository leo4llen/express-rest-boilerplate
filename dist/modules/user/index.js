"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userModule;

function userModule(ctx) {
  return {
    model: require('./models')(ctx),
    controller: require('./user.controller')(ctx),
    router: require('./user.router')(ctx)
  };
}