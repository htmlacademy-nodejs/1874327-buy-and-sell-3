const { Router } = require(`express`);
const { HttpCode } = require(`../../constants`);

const route = new Router();

module.exports = (app, service) =>
{
    app.use(`/offers`, route);

    route.get(`/`, async (_req, res) =>
    {
        const offers = await service.findAll();
        res.status(HttpCode.OK)
        .json(offers);
    });

    route.get(`/:offerId`, async (req, res) =>
    {
        const { offerId } = req.params;
        const offers = await service.findOne(offerId);
        res.status(HttpCode.OK)
        .json(offers);
    });
};