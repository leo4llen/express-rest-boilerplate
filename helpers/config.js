require('dotenv').config();

function config() {
    const util = require('util'),
        mongoose = require('mongoose');
    /* Props */

    const env = process.env.NODE_ENV,
        dbUri = process.env.DBuri;
        

    /* Exported object */
    const configObject = {
        dbConnect: () => {
            return new Promise((resolve, reject) => {
                mongoose.connect(dbUri, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve('Connected to DB Successfully')
                    }
                });

            });
        }
    };

    return Object.freeze(configObject);
}


module.exports = config()