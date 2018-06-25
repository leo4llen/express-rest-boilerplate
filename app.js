'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const glob = require("glob");
const db = require('mongoose');
const cors = require("cors");

/* Database setup */

const dbUri = process.env.DBuri;

db.connect(dbUri, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('DB connected!');
    }
});

mongoose.Promise = Promise;
app.enable('trust proxy');


app.use(helmet());
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
        res.json({
            errorTag: error.status,
            message: "invalid syntax"
        });
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

/* Make our app CORS safe */
//const domain = 'https://domain.com'; 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*"); /* *.name.domain for production  */
    res.setHeader('Access-Control-Allow-Headers', "*");
    next();
});
app.use(cors());


/* REGISTER ROUTES HERE */

/* APIs which don't require authentication */
const openRouter = express.Router();
/* APIs which require authentication */
const apiRouter = express.Router();

/* Log requests to console */
app.use(morgan('dev'));

/* Fetch router files and apply them to our routers */
glob('./routes/*.routes.js', null, (err, files) => {
    files.forEach((path) => {
        require('.' + path)(openRouter, apiRouter)
    });
});

/* Applying middleware to protected routes */
apiRouter.use(auth.verfiyToken);

/* Registering our routes */
app.use('/api', apiRouter);
app.use(openRouter);

module.exports = app;