/* eslint-disable sonarjs/no-duplicate-string */
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const orderedDrinks = drinks;

function getDrinks(req, res) {
  res.json(drinks);
}

function setDrinksOrdered() {
  orderedDrinks.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
setDrinksOrdered();

function getDrinksOrdered(req, res) {
  res.json(orderedDrinks);
}

function getDrinksByName(req, res) {
  const { name } = req.query;

  const drinksFilteredByName = drinks.filter((drink) => drink.name.includes(name));

  if (!drinksFilteredByName) {
    return res.status(404).sendo({ mensage: 'Not found!' });
  }

  return res.status(200).json(drinksFilteredByName);
}

function getDrinksByID(req, res) {
  const { id } = req.params;

  const filteredDrinkByID = drinks.find((drink) => Number(id) === drink.id);

  if (!filteredDrinkByID) {
    return res.status(404).send({ mensagem: 'Not found!' });
  }
  return res.json(filteredDrinkByID);
}

function addDrink(req, res) {
  const { id, name, price } = req.body;
  drinks.push({
    id,
    name,
    price,
  });

  res.status(201).json(`o produto ${name} foi add com sucesso`);
}

function editDrink(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((r) => r.id === Number(id));
  
  if (!drinkIndex) {
    return res.status(404).json({ message: 'drink not found!' });
  }

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  return res.status(204).end();
}

function deleteDrink(req, res) {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((r) => Number(id) === r.id);

  if (!drinkIndex) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  drinks.splice(drinkIndex, 1);

  return res.status(204).end();
}

function setup() {
  app.listen(8081, () => {
    console.log('server on');
  });
  
  app.get('/drinks', getDrinks);
  
  app.get('/drinks-ordered', getDrinksOrdered);
  
  app.get('/drinks/search', getDrinksByName);
  
  app.get('/drinks/:id', getDrinksByID);

  app.put('/drinks/:id', editDrink);

  app.post('/drinks', addDrink);

  app.delete('/drinks/:id', deleteDrink);
}
setup();
