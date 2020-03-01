var shortid=require('short-id');
module.exports=function(req,res,next){
	
	if(!req.signedCookies.sessionId){
		var sessionId=shortid.generate();
		res.cookie('sessionId',sessionId,{signed:true});

	}
	next();

}