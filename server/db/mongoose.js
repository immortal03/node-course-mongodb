var mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongoDbUrl);

module.exports = {mongoose};
