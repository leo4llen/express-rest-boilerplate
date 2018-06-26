const index = require('../controllers/index.controller')

module.exports = (openRouter, apiRouter) => {

    /* Open routes */
    openRouter.route('/helloWorld')
        .get(index.helloWorld);

    /* Protected routes */
    apiRouter.route('/helloWorld')
        .get(index.helloWorld);

}