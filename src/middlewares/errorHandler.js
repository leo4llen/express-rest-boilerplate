export default function errorHandler(app) {
  app.use(function(err, req, res, next) {
    if (err) {
      res.boom.badImplementation('Something went wrong', err.stack)
    } else {
      next()
    }
  })
  return app
}
