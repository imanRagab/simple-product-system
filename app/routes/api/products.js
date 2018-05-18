var express = require('express');
var router = express.Router();
var productsController = require('../../controllers/api/productsController')

/* GET products listing. */
router.get('/', productsController.listProducts);

module.exports = router;


