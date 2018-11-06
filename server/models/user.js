var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

// var newUser = new User({
//   email: 'howe@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user: ', doc);
// }, (err) => {
//   console.log(err);
// });

module.exports = {User};
