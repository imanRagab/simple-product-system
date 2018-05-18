var Product = require('../../models/product');

// list all products

exports.listProducts = function(req, res) {
    Product.find({}, function(err, products) {
      if (err){
        res.send(err);
      }
      res.json(products);
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
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(product);
  });
}

// update product

exports.updateProduct = function (req, res) {
    
  Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, product) {
      if (err) return res.status(500).send("There was a problem updating the article.");
      res.status(200).send(product);
  });
}