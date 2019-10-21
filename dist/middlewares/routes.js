"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = routes;

var _glob = _interopRequireDefault(require("glob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function routes(app) {
  (0, _glob["default"])('src/modules/*', null, function (err, items) {
    items.forEach(function (item) {
      item = require('../modules/' + item.split('/').pop());
      console.log(item);
    });
  });
  return app;
}