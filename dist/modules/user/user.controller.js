"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userCtrl;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function userCtrl(ctx) {
  var methods = {
    doSomething: function () {
      var _doSomething = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", success(res, 200, 'Route works'));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                error(_context.t0);
                return _context.abrupt("return", fail(res, 500));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function doSomething(_x, _x2) {
        return _doSomething.apply(this, arguments);
      }

      return doSomething;
    }(),
    doSomethingElse: function () {
      var _doSomethingElse = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", success(res, 200, 'Route works'));

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                error(_context2.t0);
                return _context2.abrupt("return", fail(res, 500));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 4]]);
      }));

      function doSomethingElse(_x3, _x4) {
        return _doSomethingElse.apply(this, arguments);
      }

      return doSomethingElse;
    }()
  };
  return Object.freeze(methods);
}