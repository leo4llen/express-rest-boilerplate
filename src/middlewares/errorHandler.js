export default function errorHandler(app) {
  app.use(function(err, req, res, next) {
    if (err) {
      console.log(err)
      res.status(500).json({
        message: process.env.NODE_ENV === 'dev' ? err.stack : 'Something went wrong'
      })
    } else {
      next()
    }
  })
  return app
}
