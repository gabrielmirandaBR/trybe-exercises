/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable camelcase */
// const Joi = require('joi');
// const rescue = require('express-rescue');
const Book = require('../services/BookMongoDB');

async function getAll(_req, res) {
  try {
    const books = await Book.getAll();
    
    if (!books) {
      res.status(404).json({ message: 'Not found' });
    }
      return res.status(200).json(books);
  } catch (error) {
      return res.status(500).json({ message: 'Ops, algo de errado :( ' });
  }
}

async function getByAuthorId(req, res) {
  try {
    const { id } = req.params;
    const filteredBooks = await Book.getByAuthorId(id);
    
    if (!filteredBooks) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(filteredBooks);
  } catch (error) {
      return res.status(500).json({ message: 'Ops, algo de errado :( ' });
  }
}

async function createNewBook(req, res) {
  try {
    const { title, author_id } = req.body;
    const book = await Book.createNewBook(title, author_id);
  
    if (!book) {
      return res.status(400).json({ message: 'data invalid' });
    }

    return res.status(201).json(book);
  } catch (error) {
      return res.status(500).json({ message: 'Ops, algo de errado :( ' });
  }
}

async function editBook(req, res) {
  try {
    const { id } = req.params;
    const { title, author_id } = req.body;
    const book = await Book.editBook(id, title, author_id);
  
    if (!book) {
      return res.status(400).json({ message: 'data invalid' });
    }
  
    return res.status(204).json(book);
  } catch (error) {
      return res.status(500).json({ message: 'Ops, algo de errado :( ' });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.deleteBook(id);
  
    if (!book) {
      return res.status(400).json({ message: 'data invalid' });
    }
  
    return res.status(204).json(book);
  } catch (error) {
      return res.status(500).json({ message: 'Ops, algo de errado :( ' });
  }
}

module.exports = {
  getAll,
  getByAuthorId,
  createNewBook,
  editBook,
  deleteBook,
};
