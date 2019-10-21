"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _middlewares = _interopRequireDefault(require("./middlewares"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.enable('trust proxy');
(0, _middlewares["default"])(app);
app.listen(1337, function () {
  console.log('app is listening');
});
var _default = app;
exports["default"] = _default;