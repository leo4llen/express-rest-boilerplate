"use strict";

function response() {
  var methods = {
    success: function success(res, status) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return res.status(status).json({
        status: status,
        message: message,
        data: data,
        err: null
      });
    },
    fail: function fail(res, status) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var errors = {
        400: 'Invalid Input',
        500: 'Internal server error',
        403: 'Forbidden',
        401: 'UnAuthorized Access'
      };
      message = message ? message : errors[status];
      return res.status(status).json({
        status: status,
        message: message,
        data: null,
        err: err
      });
    }
  };
  return Object.freeze(methods);
}

module.exports = response();