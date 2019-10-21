import bodyParser from 'body-parser'

export default function bodyParserMiddleware(app) {
  app.use(
    bodyParser.json({
      limit: '50mb'
    })
  )
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true
    })
  )
  return app
}
