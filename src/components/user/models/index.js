import User from './user.model'

export default function(ctx) {
  return { User: User(ctx) }
}
