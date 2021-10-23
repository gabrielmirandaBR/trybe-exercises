const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'token não encontrado!' });
  }

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

module.exports = {
  validateToken,
};