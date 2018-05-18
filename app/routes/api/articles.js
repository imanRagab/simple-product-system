var express = require('express');
var router = express.Router();
var articlesController = require('../../controllers/api/articlesController')

/* GET articles listing. */
router.get('/', articlesController.listArticles);

module.exports = router;