const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

function connection() {
  return MongoClient
    .connect(MONGODB_URL, {
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('example'))
    .catch((err) => {
      console.log(err);
      process.exit();
    });
}

module.exports = connection;
