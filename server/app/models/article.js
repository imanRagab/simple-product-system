var mongoose = require('../../config/db').mongoose;
var Schema = mongoose.Schema;

// define db schema 
var articleSchema = new Schema({

    no: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['Raw Material', 'Semi Processed'],
        required: true
      }
});

module.exports = mongoose.model('Article', articleSchema, 'articles');