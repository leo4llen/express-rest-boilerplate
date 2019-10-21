import { pipe } from 'ramda'
import cors from './cors'
import bodyParser from './bodyParser'
import logger from './logger'
import helmet from './helmet'

export default function middlewares(app) {
  return pipe(
    cors,
    bodyParser,
    helmet,
    logger
  )(app)
}
