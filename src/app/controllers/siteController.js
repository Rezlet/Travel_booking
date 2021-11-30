
const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')

class siteController {
    // [GET] '/'
    index (req, res,next) {
        Package.find({})
        .then(packages => res.render("home", { 
            packages: multipleMongooseToObject(packages),
        }))
        .catch(error => next(error))
    }
}

module.exports = new siteController()