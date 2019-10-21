"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = corsMiddleware;

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function corsMiddleware(app) {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  app.use((0, _cors["default"])());
  return app;
}