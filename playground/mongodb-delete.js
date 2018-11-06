// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database server.');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(`Delete document: ${JSON.stringify(result, undefined, 2)}`);
  // });

  db.collection('Users').deleteMany({name: 'Lala'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5be10ea109365f5ca9b04b2a')
  }).then((result) => {
    console.log(`Deleted: ${result}`);
  });

  // client.close();
});
