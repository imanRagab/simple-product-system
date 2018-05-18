var mongoose = require('mongoose');

// connection config
const HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
const CONNECTION_STRING = `mongodb://${HOST}/${DB_NAME}`;

// db connect
module.exports.connect = function(){
        return mongoose.connect(CONNECTION_STRING).catch(function (error) {
        console.log('Unable to connect to the mongodb instance. Error: ', error);
    });
}

// db disconnect
module.exports.disconnect = function (){
    mongoose.disconnect();
}

// handle process terminations
process.on('SIGINT', this.disconnect);
