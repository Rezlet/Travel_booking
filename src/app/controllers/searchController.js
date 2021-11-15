const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')
class searchController {
    // [GET] '/search'
    index (req, res,next) {
        Package.find({})
        .then(packages => res.render("search", { 
            packages: multipleMongooseToObject(packages),
        }))
        .catch(error => next(error))
    }
}

module.exports = new searchController()