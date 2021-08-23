const { Router } = require(`express`);
const indexRouter = new Router();

indexRouter.get(`/`, (req, res) => res.render(`index`, {}));

indexRouter.get(`/register`, (req, res) => res.send(`/register`));

indexRouter.get(`/login`, (req, res) => res.send(`/login`));

indexRouter.get(`/my`, (req, res) => res.send(`/my`));

indexRouter.get(`/search`, (req, res) => res.send(`/search`));

indexRouter.get(`/category`, (req, res) => res.render(`category`, {}));

module.exports = indexRouter;