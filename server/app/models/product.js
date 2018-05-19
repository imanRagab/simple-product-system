var mongoose = require('../../config/db').mongoose;
var Schema = mongoose.Schema;

// define db schema 
var productSchema = new Schema({

    no: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    article: {
        type: Schema.Types.ObjectId, 
        ref: 'Article',
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema, 'products');