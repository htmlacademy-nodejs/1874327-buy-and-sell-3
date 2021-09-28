const { nanoid } = require(`nanoid`);
const MAX_ID_LENGTH = require(`../../constants.js`).MAX_ID_LENGTH;

class CommentService
{
    constructor(offers)
    {
        this._offers = offers;
    }
    
    /*create(comment)
    {
        const newOffer = Object
            .assign({id: nanoid(MAX_ID_LENGTH), comments: []}, offer);
    
        this._offers.push(newOffer);
        
        return newOffer;
    }*/
    
    drop(offer, commentId)
    {
        offer.comments = offer.comments.filter((comment) => comment.id !== commentId);
        return commentId;
    }
    
    /*findAll()
    {
        return this._offers;
    }*/
    
    findOne(offerId, commentId)
    {
        return this._offers.find((item) => 
        {
            if (item.id !== offerId)
                return;

            return item.comments.find((comment) => comment.id === commentId);
        });
    }
    
    /*update(oldOffer, offer)
    {
        return Object.assign(oldOffer, offer);
    }*/
}

module.exports = CommentService;
