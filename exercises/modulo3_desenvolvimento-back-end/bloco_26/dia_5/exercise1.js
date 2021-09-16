/* eslint-disable sonarjs/no-unused-collection */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function validatePrice(req, res, next) {
  const { price } = req.body;
  const numberPrice = Number(price);
  if (!price || typeof numberPrice !== 'number' || numberPrice < 0) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  next();
}

app.listen(8081, () => console.log('server on'));

app.post('/recipes', validatePrice, (req, res) => {
  res.status(210).json({ message: 'Created Successfully!' });
});

app.put('/recipes/:id', validatePrice, (req, res) => {
  res.status(200).json({ message: 'user created' });
});
