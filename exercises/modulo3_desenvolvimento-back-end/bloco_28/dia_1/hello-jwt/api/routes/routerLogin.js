const express = require('express');
const { create, validateLogin } = require('../../controllers/user');
// const { validateToken } = require('../auth/validateToken');

const router = express.Router();

router.post('/', validateLogin, create);

module.exports = router;