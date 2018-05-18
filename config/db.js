var mongoose = require('mongoose');

// connection config
const HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
const CONNECTION_STRING = `mongodb://${HOST}/${DB_NAME}`;
