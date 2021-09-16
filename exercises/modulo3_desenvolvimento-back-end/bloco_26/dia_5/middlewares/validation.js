const RES_ERROR = 'invalid data';

function validateUser(req, res, next) {
  const { username } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ message: RES_ERROR });
  }

  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;

  if (!email || !email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: RES_ERROR });
  }

  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;

  if (!password || password.length < 3 || password.length > 8) {
    return res.status(400).json({ message: RES_ERROR });
  }

  next();
}

module.exports = {
  validateUser,
  validateEmail,
  validatePassword,
};
