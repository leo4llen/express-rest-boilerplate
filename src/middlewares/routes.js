import { pipe } from 'ramda'
import { Router } from 'express'
import glob from 'glob'
import DB from '../db'
import Utils from '../utils'

const ctx = pipe(
  Utils,
  DB
)

export default function routes(app) {
  glob('src/components/*', null, (err, components) => {
    components.forEach(item => {
      const { default: component } = require('../components/' + item.split('/').pop())
      let c = component(ctx({}))
      console.log(component.router)
      if (c.router) {
        const router = Router()
        console.log(c.router)
        c.router(router)
        app.use('/', router)
      }
    })
  })
  return app
}
