import Controller from './user.controller'
import Validator from './user.validators'
export default function userRouter(ctx) {
  const controller = Controller(ctx)
  return (open, closed) => {
    open.route('/user').get(controller.read)

    open.route('/user').post([Validator('create')], controller.create)
  }
}
