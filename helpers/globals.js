function globals() {
    require('dotenv').config();
    /* Props */

    const env = process.env.TYPE;

    const log = (...entities) => {
        return env !== 'live' ? console.log(...entities) : undefined;
    }

    /* Exported object */
    const globalObject = {
        log,

    };

    return Object.freeze(globalObject);
}


module.exports(globals())