const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routers/postsRouter');
const { routerNotFound } = require('./middlewares/notFound');

const app = express();

app.use(bodyParser.json());

app.use('/posts', postsRouter);
app.use(routerNotFound);

app.listen(8081, () => console.log('server on'));