const connect = require('./connection');

async function create(username, password) {
  const db = await connect();
  const newUser = await db.collection('users').insertOne({ username, password });
  return newUser.ops[0];
}

module.exports = {
  create,
};