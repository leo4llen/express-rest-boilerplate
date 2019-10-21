"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bodyParserMiddleware;

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function bodyParserMiddleware(app) {
  app.use(_bodyParser["default"].json({
    limit: '50mb'
  }));
  app.use(_bodyParser["default"].urlencoded({
    limit: '50mb',
    extended: true
  }));
  return app;
}