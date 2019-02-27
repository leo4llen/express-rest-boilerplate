"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const glob = require("glob");
const cors = require("cors");
const compression = require("compression");
const chalk = require("chalk");
const { routePrefix } = require("./utils");
app.enable("trust proxy");

app.use(helmet());
app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);

/* Make our app CORS safe */
//const domain = 'https://domain.com';
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  ); /* *.name.domain for production  */
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());

require("./utils/errorHandler")(app);

/* REGISTER ROUTES HERE */

/* APIs which don't require authentication */
const openRouter = express.Router();
/* APIs which require authentication */
const apiRouter = express.Router();

/* Log requests to console */
app.use(morgan("dev"));

/* Fetch router files and apply them to our routers */
glob("./components/*", null, (err, items) => {
  items.forEach(component => {
    require(component).routes(
      routePrefix(openRouter)(component.prefix),
      routePrefix(apiRouter)(component.prefix)
    );
  });
});

/* Registering our routes */
app.use("/api", apiRouter);
app.use("/", openRouter);

module.exports = app;
