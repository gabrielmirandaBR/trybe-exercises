/* eslint-disable complexity */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const connection = require('./connectionMysql');

async function getAll() {
  const [row] = await connection.execute(
    'SELECT * FROM example.books;',
  );

  return row;
}

async function getByAuthorId(id) {
  const [row] = await connection.execute(
    'SELECT * FROM example.books WHERE author_id=?',
    [id],
  );

  if (row.length === 0) {
    return null;
  }

  return row;
}

async function isValid(bookTitle, authorId) {
  if (!bookTitle || bookTitle.length < 3 || typeof bookTitle !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(await getByAuthorId(authorId))) return false;

  return true;
}

async function createNewBook(bookTitle, authorId) {
  const [row] = await connection.execute('INSERT INTO example.books (title, author_id) VALUES (?, ?)',
  [bookTitle, authorId]);
  return {
    id: row.insertId,
    bookTitle,
    authorId,
  };
}

async function editBook(id, bookTitle, authorId) {
  await connection.execute('UPDATE example.books SET title = ?, author_id = ? WHERE id = ?', [bookTitle, authorId, id]);
}

async function deleteBook(id) {
  await connection.execute('DELETE FROM example.books WHERE id = ?', [id]);
}

module.exports = {
  getAll,
  getByAuthorId,
  createNewBook,
  isValid,
  deleteBook,
  editBook,
};