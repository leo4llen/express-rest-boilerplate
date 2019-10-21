import Controller from './user.controller'

export default function userRouter(ctx) {
  const controller = Controller(ctx)
  return (open, closed) => {
    open.route('/user').get(controller.create)
    // closed.route('/index').get(ctrl.doSomethingElse)
  }
}
