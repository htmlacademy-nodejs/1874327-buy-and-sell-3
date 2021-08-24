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

app.use((err, req, res, next) => {
    res.status(500).res.render(`errors/500.pug`, {});
});

app.use((err, req, res, next) => {
    res.status(404);

  // respond with html page
    res.send(404);
});

app.listen(DEFAULT_PORT, () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));