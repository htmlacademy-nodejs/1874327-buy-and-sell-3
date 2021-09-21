const { Router } = require(`express`);
const { HttpCode } = require(`../../constants`);
const offerValidator = require(`../middlewares/offerValidator`);
const offerExist = require(`../middlewares/offerExist`);

const route = new Router();

module.exports = (app, service) =>
{
    app.use(`/offers`, route);

    route.get(`/`, async (_req, res) =>
    {
        const offers = await service.findAll();
        return res.status(HttpCode.OK)
        .json(offers);
    });

    route.get(`/:offerId`, offerExist(service), (req, res) =>
    {
        return res.status(HttpCode.OK)
            .json(res.locals.offer);
    });

    route.post(`/`, offerValidator, (req, res) =>
    {
        const offer = service.create(req.body);
        return res.status(HttpCode.CREATED)
            .json(offer);
    });

    route.put(`/:offerId`, offerExist(service), (req, res) =>
    {
        const offer = service.update(res.locals.offer, req.body);
        return res.status(HttpCode.OK)
            .json(offer);
    });
};