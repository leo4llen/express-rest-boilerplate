import { pipe } from 'ramda'
import logger from './logging'
import response from './response'

export default function utils(ctx) {
  return pipe(
    logger,
    response
  )(ctx)
}
