/* eslint-disable sonarjs/no-duplicate-string */
const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  if (products.length === 0) {
    return res.status(404).json({ message: 'Not found' });
  }

  return res.status(200).json(products);
});

router.get('/:id', async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Not found' });
  }

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  if (!newProduct) {
    return res.status(500).json({ message: 'Error!' });
  }

  return res.status(200).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) {
    return res.status(500).json({ message: 'Error!' });
  }

  res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products) {
    return res.status(500).json({ message: 'Error!' });
  }

  return res.status(200).json(products);
});

module.exports = router;