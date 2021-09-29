const { Router } = require(`express`);
const { HttpCode } = require(`../../constants`);

const route = new Router();

module.exports = (app, service) =>
{
    app.use(`/search`, route);

    route.get(`/`, async (req, res) =>
    {
        const categories = await service.findByTitle(req.query.query);
        res.status(HttpCode.OK)
        .json(categories);
    });
};