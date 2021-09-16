function validateToken(req, res, next) {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  if (!token || tokenRegex.test(token)) {
    return res.status(200).json({ message: 'invalid token' });
  }

  next();
}

module.exports = { validateToken };