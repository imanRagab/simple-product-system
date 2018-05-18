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

// create article

exports.createArticle = function(req, res) {

    Article.create({
      no : req.body.no,
      name : req.body.name,
      type : req.body.type
  }, 
  function (err, article) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(article);
  });
}


