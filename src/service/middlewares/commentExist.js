const { HttpCode } = require(`../../constants`);

module.exports = (service) => (req, res, next) =>
{
    const { offerId, commentId } = req.params;
    const comment = service.findOne(offerId, commentId);
  
    if (!comment)
    {
        return res.status(HttpCode.NOT_FOUND)
            .send(`Comment with ${commentId} not found`);
    }
  
    res.locals.comment = comment;
    return next();
};
