var express = require('express');
var router = express.Router();
var productsController = require('../../controllers/api/productsController')

/* GET products listing. */
router.get('/', productsController.listProducts);

/* POST product create. */
router.post('/', productsController.createProduct);

/* PUT article update. */
router.put('/:id', productsController.updateProduct);

module.exports = router;


