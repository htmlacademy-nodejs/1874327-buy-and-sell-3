const { nanoid } = require(`nanoid`);
const MAX_ID_LENGTH = require(`../../constants.js`).MAX_ID_LENGTH;

class OfferService
{
    constructor(offers)
    {
        this._offers = offers;
    }
  
    create(offer)
    {
        const newOffer = Object
            .assign({id: nanoid(MAX_ID_LENGTH), comments: []}, offer);
  
        this._offers.push(newOffer);
        
        return newOffer;
    }
  
    drop(id)
    {
        this._offers = this._offers.filter((item) => item.id !== id);
        return id;
    }
  
    findAll()
    {
        return this._offers;
    }
  
    findOne(id)
    {
        return this._offers.find((item) => item.id === id);
    }
  
    update(oldOffer, offer)
    {
        return Object.assign(oldOffer, offer);
    }
}

module.exports = OfferService;