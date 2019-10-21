"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = helmetMiddleware;

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function helmetMiddleware(app) {
  app.use((0, _helmet["default"])());
  return app;
}