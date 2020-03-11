var Session = require('../models/session.model');
module.exports.checkCount=function(req,res,next){
    let sessionId=req.signedCookies.sessionId;
    Session.findOne({sessionId:sessionId}).then(function(ses){
        let count;
        if(!ses)count=0;
        else count=ses.cart.length;
        
        res.locals.count=count;

    });
    next();
}