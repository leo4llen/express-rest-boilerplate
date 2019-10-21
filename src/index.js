import 'dotenv/config'
import express from 'express'
import middlewares from './middlewares'
const app = express()

app.enable('trust proxy')

middlewares(app)

app.listen(1337, () => {
  console.log('app is listening')
})

export default app
