var Product = require('../../models/product');

// list all products

exports.listProducts = function(req, res) {
  
  if(req.query.article){ // filter by article
    Product.find({article: req.query.article}, function(err, products) {
      if (err){
        res.send(err);
      }
      if(req.query.name){ // filter by name
        products = products.filter(
          product => {
            return product.name.includes(req.query.name);
          }
        );
      }
      res.json(products);
    }).populate('article');
  }
  else{
    Product.find({}, function(err, products) {
      if (err){
        res.send(err);
      }
      if(req.query.name){ // filter by name
        products = products.filter(
          product => {
            return product.name.includes(req.query.name);
          }
        );
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
      if (err) return res.status(500).send("There was a problem adding the information to the database. Error: " + err);
      res.status(200).send(product);
  });
}

// update product

exports.updateProduct = function (req, res) {
    
  Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, product) {
      if (err) return res.status(500).send("There was a problem updating the product. Error: " + err);
      res.status(200).send(product);
  });
}

// delete product

exports.deleteProduct = function (req, res) { 

  Product.findByIdAndRemove(req.params.id, function (err, product) {
    if (err) return res.status(500).send("There was a problem deleting the product. Error: " + err);
    res.status(200).send(product);
  });
}