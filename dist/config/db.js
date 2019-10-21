"use strict";

var mongoose = require('mongoose');

var _require$logging = require('../utils').logging,
    log = _require$logging.log,
    error = _require$logging.error,
    info = _require$logging.info;

function connectDb() {
  mongoose.connect(process.env.DBuri);
  mongoose.connection.on('connected', function () {
    log('Mongoose default connection is open to ', process.env.DBuri);
  });
  mongoose.connection.on('error', function (err) {
    error('Mongoose default connection has occured ' + err + ' error');
  });
  mongoose.connection.on('disconnected', function () {
    info('Mongoose default connection is disconnected');
  });
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      info('Mongoose default connection is disconnected due to application termination');
    });
  });
}

module.exports = connectDb();