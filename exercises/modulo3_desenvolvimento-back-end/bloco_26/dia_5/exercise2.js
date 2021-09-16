const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');

const PORT = 8081;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);

app.listen(PORT, () => console.log('server on'));