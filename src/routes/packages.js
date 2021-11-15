const express = require('express');
const router = express.Router();

const packagesController = require('../app/controllers/packagesController')

router.get('/', packagesController.index)
router.post('create', packagesController.create)

module.exports = router