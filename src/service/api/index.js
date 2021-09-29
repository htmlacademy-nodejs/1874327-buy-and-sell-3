const category = require(`./category`);
const offer = require(`./offer`);
const search = require(`./search`);
const comment = require(`./comment`);

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
    const commentService = new CommentService(mockData)

    category(app, new CategoryService(mockData));
    search(app, new SearchService(mockData));
    offer(app, new OfferService(mockData), commentService);
    comment(app, commentService);
})();

module.exports = app;