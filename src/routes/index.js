// const searchRouter = require('./search')
const siteRouter = require('./site')
const packagesRouter = require('./packages')
const searchRouter = require('./search')
const shopRouter = require('./shop')
function route(app) {
    app.use('/shop', shopRouter)
    app.use('/search', searchRouter)
    app.use('/package',packagesRouter)
    app.use('/', siteRouter)
}

module.exports = route