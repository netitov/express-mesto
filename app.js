const express = require('express');
const router = require('./routes');
const { PORT = 3000 } = process.env;
const app = express();

app.use('/', express.static('public'));
app.use('/', router);

app.use((req, res) =>{
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" })
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
});
