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