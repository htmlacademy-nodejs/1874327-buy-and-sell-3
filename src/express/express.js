const express = require('express');
const indexRouter = require('./routes/index');
const myRouter = require('./routes/my.js');
const offersRouter = require('./routes/offers');

const DEFAULT_PORT = 8080;

const app = express();

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(express.static('./src/express/public'));

app.use(`/`, indexRouter);
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);

app.listen(DEFAULT_PORT, () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));