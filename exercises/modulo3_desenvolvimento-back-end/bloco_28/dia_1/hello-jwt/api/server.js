require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routersLogin = require('./routes/routerLogin');
const routersUsers = require('./routes/routerUsers');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use('/login', routersLogin);
app.use('/users', routersUsers);

app.listen(PORT, () => console.log(`servidor online na porta ${PORT}`));