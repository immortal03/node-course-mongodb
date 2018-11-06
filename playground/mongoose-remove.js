const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '5be1bbf9f8ed2f83cb643b0b'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5be1bbc4f8ed2f83cb643b0a').then((todo) => {
  console.log(todo);
});
