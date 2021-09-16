const mysql = require('mysql2/promise');

const connection = mysql.createPool(
  {
    host: 'localhost',
    user: 'gabriel',
    password: 'gabriel12345',
    database: 'rest_exercicios', 
  },
);

module.exports = connection;