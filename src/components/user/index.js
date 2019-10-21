import model from './models'
import controller from './user.controller'
import router from './user.router'

export default function userModule(ctx) {
  return {
    model: model(ctx),
    controller: controller(ctx),
    router: router(ctx)
  }
}
