require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const fs = require('fs');

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
app.use(express.static(`${__dirname}/uploads`)); // api serve agora arquivos estático, pode colocar o primeiro parâmetro para que sirva um endpoint específico

// function fileExists(filename) {
//   if (file.mimetype !== 'image/png') {
//     req.fileValidationError = true;
//     return cb(null, false);
//   }

//   cb(null, true);
// }

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    if (file.mimetype !== 'image/png') {
       req.isError = true;
    }

    const files = fs.readdirSync(`${__dirname}/uploads`);
  
    const isDuplicate = files.some((fileName) => fileName
      .split('-')
      .slice(1, fileName.length)
      .join('-') === file.originalname);

    req.isDuplicate = isDuplicate;
    
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.isError) {
    return res.status(403).json({ error: { message: 'Extension must be `png`' } });
  }

  if (req.isDuplicate) {
    return res.status(409).json({ error: { mesage: 'File already exists' } });
  }
  
  return res.status(200).json({ body: req.body, file: req.file });
});

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.use(express.static(`${__dirname}/uploads`));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
