const category = require(`./category`);
const offer = require(`./offer`);
const search = require(`./search`);

const {
    CategoryService,
    OfferService,
    CommentService,
    SearchService
} = require(`../data-service`);

const { Router } = require(`express`);
const getMockData = require(`../lib/get-mock-data`).getMockData;

const app = new Router();
  
(async () =>
{
    const mockData = await getMockData();

    category(app, new CategoryService(mockData));
    search(app, new SearchService(mockData));
    offer(app, new OfferService(mockData), new CommentService(mockData));
})();

module.exports = app;