require('dotenv').config();

function config() {
    const util = require('util'),
        mongoose = require('mongoose');
    /* Props */

    const env = process.env.NODE_ENV,
        dbUri = process.env.DBuri;



    /* Exported object */
    const configObject = {
        log: (...entities) => {
            return env !== 'live' ? console.log(...entities) : undefined;
        },
        dbConnect: () => {

        }
    };

    return Object.freeze(configObject);
}


module.exports(config())