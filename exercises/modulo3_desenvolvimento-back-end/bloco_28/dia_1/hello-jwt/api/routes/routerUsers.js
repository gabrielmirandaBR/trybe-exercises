const express = require('express');
const { getUsers, getSecretUser } = require('../../controllers/user');
const { validateAdminUser } = require('../auth/validateAdminUser');

 const { validateToken } = require('../auth/validateToken');

const router = express.Router();

router.get('/', validateToken, getUsers);
router.get('/top-secret', validateToken, validateAdminUser, getSecretUser);

module.exports = router;