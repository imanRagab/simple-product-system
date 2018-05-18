var Article = require('../../models/article');

// list all articles

exports.listArticles = function(req, res) {
  Article.find({}, function(err, articles) {
    if (err){
      res.send(err);
    }
    res.json(articles);
  });
};


