const express = require('express');
const router = express.Router();

const shopController = require('../app/controllers/shopController.js')

router.get('/', shopController.index)
router.get('/cart', shopController.cart)
router.get('/sign-in', shopController.sign)
module.exports = router 