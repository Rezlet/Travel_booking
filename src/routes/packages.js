const express = require('express');
const router = express.Router();

const packagesController = require('../app/controllers/packagesController')
// [GET] /package/create
router.get('/create', packagesController.create)
// [POST] /package/store
router.post('/store', packagesController.store)
// [GET] /packages
router.get('/', packagesController.index)

module.exports = router