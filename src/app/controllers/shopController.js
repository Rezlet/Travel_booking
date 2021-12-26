const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')
const { mongooseToObject} = require('../../util/mongoose')
class searchController {
    // [GET] '/shop'
    index (req, res,next) {
        res.render('shop')
    }
    cart (req, res,next) {
        res.render('shop/cart')
    }
    sign(req, res,next) {
        res.render('shop/sign')
    }

}

module.exports = new searchController()