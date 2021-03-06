var express = require('express');
var router = express.Router();
var articlesController = require('../../controllers/api/articlesController')

/* GET articles listing. */
router.get('/', articlesController.listArticles);

/* GET article show. */
router.get('/:id', articlesController.showArticle);

/* POST count article products. */
router.post('/products', articlesController.getMaxProducts);

/* POST article create. */
router.post('/', articlesController.createArticle);

/* PUT article update. */
router.put('/:id', articlesController.updateArticle);

/* DELETE article delete. */
router.delete('/:id', articlesController.deleteArticle);

module.exports = router;


