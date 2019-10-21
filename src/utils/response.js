function response(ctx) {
  const {
    LOG: { error }
  } = ctx

  const RESPONSE = {
    success(res, statusCode = 200, message = 'Success', data = null) {
      return res.status(statusCode).json({
        statusCode,
        message,
        data,
        error: null
      })
    },
    internalError(res, err = null, message = 'Internal server error') {
      error(err)
      return res.boom.badImplementation(message)
    }
  }
  ctx.RESPONSE = Object.freeze(RESPONSE)
  return ctx
}

export default response
