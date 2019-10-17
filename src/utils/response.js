function response() {
  const methods = {
    success: (res, status, message = 'success', data = null) => {
      return res.status(status).json({
        status,
        message,
        data,
        err: null
      })
    },
    fail: (res, status, message = '', err = {}) => {
      const errors = {
        400: 'Invalid Input',
        500: 'Internal server error',
        403: 'Forbidden',
        401: 'UnAuthorized Access'
      }
      message = message ? message : errors[status]
      return res.status(status).json({
        status,
        message,
        data: null,
        err
      })
    }
  }

  return Object.freeze(methods)
}

module.exports = response()
