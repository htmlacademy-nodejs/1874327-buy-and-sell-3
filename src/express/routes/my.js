const { Router } = require(`express`);
const myRouter = new Router();

myRouter.get(`/comments`, (req, res) => res.send(`/my/comments`));

// templated
myRouter.get(`/tickets`, (req, res) => res.render(`my-tickets`, {}));

module.exports = myRouter;