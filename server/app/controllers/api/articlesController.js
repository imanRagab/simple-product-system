var Article = require('../../models/article');
var Product = require('../../models/product');
var mongoose = require('../../../config/db').mongoose;
var Schema = mongoose.Schema;

// list all articles

exports.listArticles = function(req, res) {

  if(req.query.type ||  req.query.name){
    Article.find(
      { $or:[
        {type: req.query.type},
        {name: new RegExp(req.query.name, "i")}
      ]
      },
      function(err, articles) {
      if (err){
        res.send(err);
      }
      res.json(articles);
    });
  }
  else{
    Article.find({}, function(err, articles) {
      if (err){
        res.send(err);
      }
      res.json(articles);
    });
  }
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

// get max products article

exports.getMaxProducts = function(req, res) {

  var articles = req.body.articles;
  Article.aggregate([
    {$match: { _id: { 
      $in: articles.map(function(id){ return new mongoose.Types.ObjectId(id); })
    }}},
    {
      $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "article",
          as: "products"
      }
    },
    {
      $project: {
          name: 1,
          count: { $size: "$products" }
      }
    },
    {
     $sort : {count : -1}
    }, 
    {
      $limit : 1 
    }
 ]).exec(function(err, results){
    if (err){
      res.send(err);
    }
    res.json(results);
 })
}

// create article

exports.createArticle = function(req, res) {

  Article.create({
    no : req.body.no,
    name : req.body.name,
    type : req.body.type
  }, 
  function (err, article) {
      if (err) return res.status(500).send(err);
      res.status(200).send(article);
  });
}

// update article 

exports.updateArticle = function (req, res) {
    
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, article) {
      if (err) return res.status(500).send(err);
      res.status(200).send(article);
  });
}

// delete article

exports.deleteArticle = function (req, res) { 

  // test if articale has assigned products
  Product.find({ article: req.params.id }, function(err, products){

    if (err) return res.status(500).send(err);

    if (products.length) return res.status(500).send({"message":"Article have assigned products"});

    Article.findByIdAndRemove(req.params.id, function (err, article) {
      if (err) return res.status(500).send(err);
      res.status(200).send(article);
    });
  });
}


