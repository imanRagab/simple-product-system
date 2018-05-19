var Article = require('../../models/article');
var Product = require('../../models/product');

// list all articles

exports.listArticles = function(req, res) {
  Article.find({}, function(err, articles) {
    if (err){
      res.send(err);
    }
    res.json(articles);
  });
}

// show article

exports.showArticle = function (req, res) { 

    Article.findById( req.params.id, function (err, article) { 

        if(err){
          res.send(err);
        }
        res.json(article);
     });

 }

// list article products

exports.listProducts = function(req, res) {

  Product.find({ article: req.params.id }, function(err, articles) {
    if (err){
      res.send(err);
    }
    res.json(articles);
  });
}

// create article

exports.createArticle = function(req, res) {

  Article.create({
    no : req.body.no,
    name : req.body.name,
    type : req.body.type
  }, 
  function (err, article) {
      if (err) return res.status(500).send("There was a problem adding the information to the database. Error: " + err);
      res.status(200).send(article);
  });
}

// update article 

exports.updateArticle = function (req, res) {
    
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, article) {
      if (err) return res.status(500).send("There was a problem updating the article. Error: " + err);
      res.status(200).send(article);
  });
}

// delete article

exports.deleteArticle = function (req, res) { 

  // test if articale has assigned products
  Product.find({ article: req.params.id }, function(err, products){

    if (err) return res.status(500).send(err);

    if (products.length) return res.status(500).send("Article have assigned products");

    Article.findByIdAndRemove(req.params.id, function (err, article) {
      if (err) return res.status(500).send("There was a problem deleting the article. Error: " + err);
      res.status(200).send("Article "+ article.name +" was deleted.");
    });
  });
}


