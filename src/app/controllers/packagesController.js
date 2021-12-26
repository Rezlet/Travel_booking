const Package = require('../model/Package.js')
const { multipleMongooseToObject} = require('../../util/mongoose')
const { mongooseToObject} = require('../../util/mongoose')
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
        const packages = new Package(req.body);
        packages
            .save()
            .then(res.redirect(`/package/list`))
            .catch(error => {

            })
    }

    // [GET] /package/list
    list(req,res,next) {
        Promise.all([Package.find(), Package.countDocumentsDeleted()])
            .then(([packages, deletedCount]) =>
                res.render('list', {
                    deletedCount,
                    packages: multipleMongooseToObject(packages),
                }),
            )
            .catch(next);
    }

    // [GET] /package/:id/edit
    edit(req,res,next) {
        Package.findById(req.params.id)
            .then(packages => res.render("edit", { 
                packages: mongooseToObject(packages),
            }))
      
    }

    // [PUT] /package/:id
    update(req,res,next) {
        Package.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect("/package/list"))
            .catch(next)
    }

    // [DEL] /package/:id
    delete(req,res,next ) {
        Package.delete({_id: req.params.id})
            .then(res.redirect('/package/list'))
            .catch(next)
    }

    // [GET] /package/trash
    trash(req,res,next) {
        Package.findDeleted({})
            .then(packages => res.render("trash", {
                packages: multipleMongooseToObject(packages),
            }))
    }

    // [PATCH] /package/:id
    restore(req,res,next) {
        Package.restore({_id: req.params.id})
            .then(() => res.redirect('/package/trash'))
            .catch(next)
    }

    // [DEL] /package/:id/force
    forceDelete(req,res,next) {
        Package.deleteOne({_id: req.params.id})
        .then(() => res.redirect('/package/trash'))
        .catch(next)
    }
}

module.exports = new packagesController()