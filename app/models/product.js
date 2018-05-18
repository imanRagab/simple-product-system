var mongoose = require('../../config/db').mongoose;
var Schema = mongoose.Schema;

// define db schema 
var productSchema = new Schema({

    no: {
        type: Number
    },

    name: {
        type: String
    },

    article: {
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }
});

module.exports = mongoose.model('Product', productSchema, 'products');