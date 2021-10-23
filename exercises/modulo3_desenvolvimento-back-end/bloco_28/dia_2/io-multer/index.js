require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/* importa o pacote multer */
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.use com um parâmetro => aplicavél para todas as rotas */
/* o parâmetro é o caminho que queremos expor, ou seja, antes de realizar o upload
o express verifica se no projeto tem tal arquivo, se tiver o express envia o conteúdo
desse arquivo, se não chama a função next() */
app.use(express.static(`${__dirname}/uploads`));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    const newName = file.originalname.split('.');
    callback(null, `${newName[0]}-enviado${Date.now()}`);
  },
});

/* instância do multer configurada com o caminho de destino dos uploads */
/* como não queríamos o nome desconfigurado estamos passando a variável
que edita os parâmetros do arquivo */
const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }));

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
