const { Router } = require(`express`);
const indexRouter = new Router();

indexRouter.get(`/register`, (req, res) => res.send(`/register`));

indexRouter.get(`/my`, (req, res) => res.send(`/my`));

indexRouter.get(`/search`, (req, res) => res.send(`/search`));

// templated
indexRouter.get(`/category`, (req, res) => res.render(`category`, {}));

indexRouter.get(`/comments`, (req, res) => res.render(`comments`, {}));

indexRouter.get(`/`, (req, res) => res.render(`main`, {}));

indexRouter.get(`/main`, (req, res) => res.render(`main`, {}));

indexRouter.get(`/login`, (req, res) => res.render(`login`, {}));

indexRouter.get(`/ticket`, (req, res) => res.render(`ticket`, {}));

indexRouter.get(`/ticket-edit`, (req, res) => res.render(`ticket-edit`, {}));

indexRouter.get(`/search-result`, (req, res) => res.render(`search-result`, {}));

indexRouter.get(`/sign-up`, (req, res) => res.render(`sign-up`, {}));

module.exports = indexRouter;