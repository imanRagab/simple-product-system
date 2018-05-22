var Product = require('../../models/product');

// list all products

exports.listProducts = function(req, res) {
  
  if(req.query.article || req.query.name){ 
    Product.find(
      { $or:[
        {article: req.query.article},
        {name: new RegExp(req.query.name, "i")}
      ]
      }, 
      function(err, products) {
      if (err){
        res.send(err);
      }
      res.json(products);
    }).populate('article');
  }
  else{
    Product.find({}, function(err, products) {
      if (err){
        res.send(err);
      }
      res.json(products);
    }).populate('article');
  }
}

// show product

exports.showProduct = function (req, res) { 

  Product.findById( req.params.id, function (err, product) { 
    if(err){
      res.send(err);
    }
    res.json(product);
  });
}

// create product

exports.createProduct = function(req, res) {

  Product.create({
    no : req.body.no,
    name : req.body.name,
    article : req.body.article
  }, 
  function (err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
  });
}

// update product

exports.updateProduct = function (req, res) {
    
  Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
  });
}

// delete product

exports.deleteProduct = function (req, res) { 

  Product.findByIdAndRemove(req.params.id, function (err, product) {
    if (err) return res.status(500).send(err);
    res.status(200).send(product);
  });
}