/* eslint-disable max-lines-per-function */
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

function setup() {
  app.listen(8081, () => console.log('server on'));

  app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

  app.post('/hello', (req, res) => {
    const { name } = req.body;

    return res.status(200).json({ message: `Hello, ${name}` });
  });

  app.post('/greetings', (req, res) => {
    const { name, age } = req.params;

    if (Number(age) <= 17) {
      return res.json(401).json({ message: 'Unauthorized' });
    }

    return res.status(200).json({ message: `Hello, ${name}` });
  });
}

setup();