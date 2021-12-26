const express = require('express');
const router = express.Router();

const packagesController = require('../app/controllers/packagesController')
// [GET] /package/create
router.get('/create', packagesController.create)
// [GET] /package/list
router.get('/list', packagesController.list)
// [GET] /package/trash
router.get('/trash', packagesController.trash)
// [GET] /package/list
router.get('/:id/edit', packagesController.edit)
// [PUT] /package/_id
router.put('/:id', packagesController.update)
// [PATCH] /package/_id
router.patch('/:id/restore', packagesController.restore)
// [DEL] /package/_id
router.delete('/:id', packagesController.delete)
// [DEL] /package/_id/force
router.delete('/:id/force', packagesController.forceDelete)
// [POST] /package/store
router.post('/store', packagesController.store)
// [GET] /packages
router.get('/', packagesController.index)

module.exports = router