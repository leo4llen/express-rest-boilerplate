"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = middlewares;

var _ramda = require("ramda");

var _cors = _interopRequireDefault(require("./cors"));

var _bodyParser = _interopRequireDefault(require("./bodyParser"));

var _logger = _interopRequireDefault(require("./logger"));

var _helmet = _interopRequireDefault(require("./helmet"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function middlewares(app) {
  return (0, _ramda.pipe)(_cors["default"], _bodyParser["default"], _helmet["default"], _logger["default"], _routes["default"])(app);
}