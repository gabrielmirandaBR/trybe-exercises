/* eslint-disable complexity */
const user = require('../models/user');

function validateLogin(username, password) {
  if (
      typeof username !== 'string' || username.length < 5 
      || typeof password !== 'string' || password.length < 5
    ) {
    return false;
  }

  return true;
}

async function create(username, password) {
  const newUser = await user.create(username, password);

  if (!username || !password) return false; 

  return newUser;
}

module.exports = {
  validateLogin,
  create,
};