import { pipe } from 'ramda'
import { Router } from 'express'
import glob from 'glob'
import DB from '../db'
import Utils from '../utils'

const ctx = pipe(
  Utils,
  DB
)({})

export default function routes(app) {
  glob('src/components/*', null, (err, components) => {
    const openRouter = Router()
    const closedRouter = Router()

    components.forEach(item => {
      const { default: component } = require('../components/' + item.split('/').pop())
      let componentWithContext = component(ctx)
      if (componentWithContext.router) {
        componentWithContext.router(openRouter, closedRouter)
      }
    })

    app.use('/', openRouter)

    //TODO: Add authentication middleware here

    app.use('/api', closedRouter)
  })
  return app
}
