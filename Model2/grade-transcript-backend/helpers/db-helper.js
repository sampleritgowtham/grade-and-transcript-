const mongoose = require('mongoose');
const config = require('../config');

// Establish connection to MongoDB
module.exports.connection = () => {
  const mongoUrl = `mongodb://localhost:27017/${config.dbName}`;
  return mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
};
