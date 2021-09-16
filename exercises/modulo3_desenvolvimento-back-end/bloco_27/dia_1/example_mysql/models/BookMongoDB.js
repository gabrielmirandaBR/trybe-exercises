const connection = require('./connectionMongoDB');

async function getAll() {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

async function getByAuthorId(id) {
  if (!id) {
    return null;
  }
  const book = connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());

    if (!book) return null;

    return book;
}

async function createNewBook(bookTitle, authorId) {
  return connection()
    .then((db) => db.collection('books').insertOne({ bookTitle, authorId }))
    .then((result) => ({ id: result.insertedId, bookTitle, authorId }));
}

async function editBook(id, bookTitle, authorId) {
  if (!id) {
    return null;
  }

  const book = connection()
    .then((db) => db.collection('books').updateOne(
      { author_id: Number(id) }, { $set: { bookTitle, authorId } },
    ));

    if (!book) return null;

    return book;
}

async function deleteBook(id) {
  if (!id) return null;

  const book = connection()
    .then((db) => db.collection('books').deleteOne({ author_id: Number(id) }));

    if (!book) return null;

    return book;
}

module.exports = {
  getAll,
  getByAuthorId,
  createNewBook,
  editBook,
  deleteBook,
};