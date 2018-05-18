var express = require('express');
var router = express.Router();
var articlesController = require('../../controllers/api/articlesController')

/* GET articles listing. */
router.get('/', articlesController.listArticles);

/* POST articles listing. */
router.post('/', articlesController.createArticle);

module.exports = router;


