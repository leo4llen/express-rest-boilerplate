"use strict";

var chalk = require('chalk');

function logs() {
  var methods = {
    print: function print(type) {
      return function () {
        return process.env.NODE_ENV === 'development' ? console.log(chalk[type].apply(chalk, arguments)) : undefined;
      };
    },
    log: function log() {
      return methods.print('green').apply(void 0, arguments);
    },
    info: function info() {
      return methods.print('blue').apply(void 0, arguments);
    },
    error: function error() {
      return methods.print('red').apply(void 0, arguments);
    }
  };
  return Object.freeze(methods);
}

module.exports = logs();