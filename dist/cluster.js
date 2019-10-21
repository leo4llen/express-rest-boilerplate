"use strict";

var _require = require('path'),
    join = _require.join;

require('dotenv').config({
  path: join(__dirname, "../".concat(process.argv[2]))
});

var cluster = require('cluster');

var numCPUs = require('os').cpus().length || 1;
var port = process.env.PORT || 3000;

var app = require('./index');

var _require$logging = require('./utils').logging,
    log = _require$logging.log,
    info = _require$logging.info,
    error = _require$logging.error; // Graceful shutdown


process.on('SIGINT', function () {
  process.exit(1);
});

if (process.env.NODE_ENV === 'development') {
  app.listen(port, function () {});
} else {
  if (cluster.isMaster) {
    log("Master cluster setting up ".concat(numCPUs, " workers..."));

    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('online', function (worker) {
      log("Worker ".concat(worker.process.pid, " is online"));
    });
    cluster.on('exit', function (worker, code, signal) {
      error("Worker ".concat(worker.process.pid, " died with code:").concat(code, " and signal: ").concat(signal));
      log("Starting a new worker");
      cluster.fork();
    });
  } else {
    app.listen(port);
    log("Process ".concat(process.pid, " is listening to all incoming requests at: ").concat(port));
  }
}