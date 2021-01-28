const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use('/', express.static('public'));

app.use(bodyParser.json());

app.use('/', router);

app.use((req, res, next) => {
  req.user = {
    _id: '6011b0c794f4f61068b92487'};

  next();
});

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
