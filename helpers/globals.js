require('dotenv').config();
const chalk = require('chalk')

function globals() {
    require('dotenv').config();
    /* Props */

    const env = process.env.NODE_ENV;


    /* Exported object */
    const globalObject = {
        log: (...entities) => {
            return env !== 'live' ? console.log(...entities) : undefined;
        }

    };

    return Object.freeze(globalObject);
}

module.exports = globals()