var mongoose = require('../../config/db').mongoose;
var Schema = mongoose.Schema;

// define db schema 
var articleSchema = new Schema({

    no: {
        type: Number
    },

    name: {
        type: String
    },

    type: {
        type: String,
        enum: ['Raw Material', 'Semi Processed']
      }
});

module.exports = mongoose.model('Article', articleSchema, 'articles');