const category = require(`./category`);

const {
    CategoryService
} = require(`../data-service`);
const { Router } = require(`express`);
const getMockData = require(`../lib/get-mock-data`).getMockData;

const app = new Router();
  
(async () =>
{
    const mockData = await getMockData();

    category(app, new CategoryService(mockData));
    /*search(app, new SearchService(mockData));
    offer(app, new OfferService(mockData), new CommentService());*/
})();

module.exports = app;