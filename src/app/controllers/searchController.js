const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')
const { mongooseToObject} = require('../../util/mongoose')
class searchController {
    // [GET] '/search'
    index (req, res,next) {
        Package.find({})
        .then(packages => res.render("search", { 
            packages: multipleMongooseToObject(packages),
        }))
        .catch(error => next(error))
    }


    item(req, res, next) {
        Package.findOne({ slug: req.params.slug })
        .then(packages => res.render("item", { 
            packages: mongooseToObject(packages),
        }))
        .catch(error => next(error))
    }
}

module.exports = new searchController()