const express = require('express');
const bodyParser = require('body-parser');
const btcRouter = require('./routers/btcRouter');

const app = express();

app.use(bodyParser.json());

app.use('/btc', btcRouter);

app.listen(8081, () => console.log('server on'));