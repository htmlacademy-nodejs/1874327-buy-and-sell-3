class SearchService
{
    constructor(offers)
    {
        this._offers = offers;
    }
  
    findByTitle(searchSubStr)
    {
        return this._offers.filter(offer => offer.title.toLowerCase().includes(searchSubStr.toLowerCase()));
    }
}

module.exports = SearchService;
