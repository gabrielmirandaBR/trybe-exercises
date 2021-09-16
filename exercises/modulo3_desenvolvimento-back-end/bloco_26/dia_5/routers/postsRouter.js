const router = require('express').Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const result = posts.find((item) => item.id === Number(id));

  if (!result) {
    return res.status(404).send({ message: 'post not found' });
  }
  res.status(200).json(result);
});

module.exports = router;