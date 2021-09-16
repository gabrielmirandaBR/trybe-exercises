/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable camelcase */
const bodyParser = require('body-parser');
const express = require('express');
// const Book = require('../models/BookMysql');
const Book = require('../controllers/Book');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/books', Book.getAll);

app.get('/books/:id', Book.getByAuthorId);

app.post('/books', Book.createNewBook);

app.put('/books/:id', Book.editBook);

app.delete('/books/:id', Book.deleteBook);

app.listen(PORT, () => {
  console.log('server on');
});
