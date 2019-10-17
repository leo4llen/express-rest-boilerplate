const mongoose = require('mongoose')
const { log, error, info } = require('../utils').logging

function connectDb() {
  console.log(process.env.DBuri)
  mongoose.connect(process.env.DBuri)

  mongoose.connection.on('connected', function() {
    log('Mongoose default connection is open to ', process.env.DBuri)
  })

  mongoose.connection.on('error', function(err) {
    error('Mongoose default connection has occured ' + err + ' error')
  })

  mongoose.connection.on('disconnected', function() {
    info('Mongoose default connection is disconnected')
  })

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      info('Mongoose default connection is disconnected due to application termination')
    })
  })
}

module.exports = connectDb()
