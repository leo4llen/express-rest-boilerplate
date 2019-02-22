require("dotenv").config();

const cluster = require("cluster");
const numCPUs = require("os").cpus().length || 1;
const port = process.env.PORT || 3000;
const app = require("./app");

if (cluster.isMaster) {
  console.log(`Master cluster setting up ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("online", worker => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${
        worker.process.pid
      } died with code:${code} and signal: ${signal}`
    );
    console.log(`Starting a new worker`);
    cluster.fork();
  });
} else {
  app.listen(port);
  console.log(
    `Process ${process.pid} is listening to all incoming requests at: ${port}`
  );
}
