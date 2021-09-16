/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use('/products', productController);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});