/* eslint-disable max-lines-per-function */
const bodyParser = require('body-parser');
const express = require('express');
const { getSimpsons } = require('./simpsons-function');

const app = express();

app.use(bodyParser.json());

 function setup() {
  app.listen(8081, () => console.log('server on'));

  app.get('/simpsons', (async (_req, res) => {
      const simpsons = await getSimpsons();

      if (!simpsons) {
        return res.status(404).json({ message: 'Not Found!' });
      }
      return res.status(200).json(simpsons);
  }));

  app.get('/simpsons/:id', (async (req, res) => {
    const { id } = req.params;
    const simpsons = await getSimpsons();

    const filteredSimpsons = simpsons.find((item) => item.id === id);

    if (!filteredSimpsons) {
      return res.status(404).json({ message: 'Not found!' });
    }
    return res.status(200).json(filteredSimpsons);
  }));
}

setup();
