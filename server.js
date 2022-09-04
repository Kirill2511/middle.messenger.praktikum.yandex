const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const disDirPath = path.join(__dirname, 'build');

app.use(express.static(disDirPath));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(disDirPath), './index.html');
});

app.listen(PORT, function () {
  console.log(`Сервер запущен на порте ${PORT}`);
});
