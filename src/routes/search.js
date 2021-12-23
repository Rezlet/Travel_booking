const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/searchController.js')

router.get('/', searchController.index)
// [GET] /search/slug
router.get('/:slug', searchController.item)

module.exports = router 