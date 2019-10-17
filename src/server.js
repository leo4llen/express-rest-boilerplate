const { join } = require('path')

require('dotenv').config({ path: join(__dirname, `../${process.argv[2]}`) })

const cluster = require('cluster')
const numCPUs = require('os').cpus().length || 1
const port = process.env.PORT || 3000
const app = require('./index')
const { log, info, error } = require('./utils').logging

// Graceful shutdown
process.on('SIGINT', () => {
  process.exit(1)
})

if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {})
} else {
  if (cluster.isMaster) {
    log(`Master cluster setting up ${numCPUs} workers...`)

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }

    cluster.on('online', worker => {
      log(`Worker ${worker.process.pid} is online`)
    })

    cluster.on('exit', (worker, code, signal) => {
      error(`Worker ${worker.process.pid} died with code:${code} and signal: ${signal}`)
      log(`Starting a new worker`)
      cluster.fork()
    })
  } else {
    app.listen(port)
    log(`Process ${process.pid} is listening to all incoming requests at: ${port}`)
  }
}
