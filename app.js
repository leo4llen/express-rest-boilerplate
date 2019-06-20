'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const glob = require('glob')
const cors = require('cors')
const { verifyToken } = require('./components/auth').ctrl
// Connect to DB
require('./config/db')

app.enable('trust proxy')
/* Protecting headers */
app.use(helmet())
/* Body parser config */
app.use(
  bodyParser.json({
    limit: '50mb'
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  })
)

/* CORS setup */
//const domain = 'https://domain.com';
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') /* *.name.domain for production  */
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
app.use(cors())

/* Apply error handlers to app */
require('./utils').errorHandler(app)

/* Log requests to console */
app.use(morgan('dev'))

/* Router setup */

const openRouter = express.Router() // Open routes
const apiRouter = express.Router() // Protected routes

apiRouter.use(verifyToken)

/* Fetch router files and apply them to our routers */
glob('./components/*', null, (err, items) => {
  items.forEach(component => {
    if (require(component).routes) require(component).routes(openRouter, apiRouter)
  })
})

app.use('/api', apiRouter)
app.use('/', openRouter)

module.exports = app
