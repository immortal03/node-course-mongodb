var mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDbUrl);

module.exports = {mongoose};
