import { pipe } from 'ramda'
import cors from './cors'
import bodyParser from './bodyParser'
import logger from './logger'
import helmet from './helmet'
import routes from './routes'
import errorHandler from './errorHandler'
import boomErrors from './boom'

export default function middlewares(app) {
  return pipe(
    cors,
    bodyParser,
    boomErrors,
    helmet,
    logger,
    errorHandler,
    routes
  )(app)
}
