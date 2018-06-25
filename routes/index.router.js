const index = require('../controllers/index.controller')

module.exports = (openRoutes, apiRoutes) => {

    /* Open routes */
    apiRoutes.route('/helloWorld')
        .get(index.helloWorld);

    /* Protected routes */
    openRoutes.route('/helloWorld')
        .get(index.helloWorld);

}