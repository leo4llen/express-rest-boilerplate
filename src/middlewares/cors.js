import cors from 'cors'

export default function corsMiddleware(app) {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })
  app.use(cors())
  return app
}
