import joi from '@hapi/joi'
import { pick } from 'ramda'
export default function(api) {
  const APIS = {
    create: joi
      .object()
      .keys({
        body: joi.object().keys({
          name: joi.string().required()
        })
      })
      .unknown(true)
  }

  return function validator(req, res, next) {
    let payload = pick(['body', 'params', 'query'])(req)

    let { error } = APIS[api].validate(payload)

    if (error) return res.boom.badRequest('Invalid request payload')

    next()
  }
}
