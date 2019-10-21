"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = logger;

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function logger(app) {
  app.use((0, _morgan["default"])('dev'));
  return app;
}