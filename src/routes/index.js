const siteController = require('../app/controllers/siteController.js')

function route(app) {
    app.use('/', siteController.index)
}

module.exports = route