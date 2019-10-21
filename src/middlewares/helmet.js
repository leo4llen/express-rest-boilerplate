import helmet from 'helmet'

export default function helmetMiddleware(app) {
  app.use(helmet())
  return app
}
