const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const { JWT_KEY } = process.env;

function validateLogin(req, res, next) {
  const { username, password } = req.body;
  const isValidate = userService.validateLogin(username, password);

  if (!isValidate) {
    res.status(422).json({ message: 'Usuário e/ou senha inválidos' });
  }

  next();
}

async function create(req, res) {
  try {
    const { username, password } = req.body;
      const newUser = await userService.create(username, password);

    if (!newUser) {
      res.status(404).json({ message: 'username e senha são obrigatórios' });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const admin = username === 'admin' && password === 's3nh4S3gur4???';

    const token = jwt.sign({ username, admin }, JWT_KEY, jwtConfig);

    res.status(200).json({ token, admin });
  } catch (err) {
    res.status(500).json({ message: 'Errro interno' });
  }
}

async function getUsers(req, res) {
  const { username, admin } = req.user;
  
    res.status(200).json({
      username,
      admin,
    });
}

async function getSecretUser(_req, res) {
  res.status(200).json({
    secretInfo: 'Peter Parker é o Homem-Aranha',
  });
}

module.exports = {
  validateLogin,
  create,
  getUsers,
  getSecretUser,
};