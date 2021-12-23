const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')
class packagesController {

    

    // [GET] /package
    index (req, res,next) {
        Package.find({}) 
        .then(packages => res.render("search", { 
            packages: multipleMongooseToObject(packages),
        }))
        .catch(error => next(error))
    }

    // [GET] /package/create
    create (req,res, next ) {
        Package.find({})
        .then(packages => res.render("create", {
            packages:  multipleMongooseToObject(packages),
        }))
        .catch(error => next(error))
    }

    // [POST] /package/store
    store(req,res, next ) {
        const formData = req.body
        const packages = new Package(formData);
        packages
            .save()
            .then(res.redirect(`/search`))
            .catch(error => {

            })
    }
}

module.exports = new packagesController()