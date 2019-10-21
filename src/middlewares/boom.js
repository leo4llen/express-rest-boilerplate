import boom from 'express-boom'
export default function boomMiddleare(app) {
  app.use(boom())
  return app
}
