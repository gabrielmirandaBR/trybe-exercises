/* eslint-disable complexity */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const Book = require('../models/BookMongoDB');

async function isValid(bookTitle, authorId) {
  if (!bookTitle || typeof bookTitle !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(await getByAuthorId(authorId))) return false;

  return true;
}

async function getAll() {
  return Book.getAll();
}

async function getByAuthorId(id) {
  const book = await Book.getByAuthorId(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
}

async function createNewBook(bookTitle, authorId) {
  const isValide = isValid(bookTitle, authorId);
  const book = await Book.createNewBook(bookTitle, authorId);

  if (!isValide) return false;
  
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }
  return book;
}

async function editBook(id, bookTitle, authorId) {
  const isValide = isValid(bookTitle, authorId);
  const book = await Book.editBook(id, bookTitle, authorId);

  if (!isValide) return false;
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Could not edit the book',
      },
    };
  }

  return book;
}

async function deleteBook(id) {
  const book = await Book.deleteBook(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
}

module.exports = {
  getAll,
  getByAuthorId,
  createNewBook,
  editBook,
  deleteBook,
};