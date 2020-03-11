var Session=require('../models/session.model');

module.exports.cart=function(req,res){
	res.render('auth/cart.pug')
}
module.exports.addToCart=function(req,res,next){
	let  productId=req.params.product_Id;
	let sessionId=req.signedCookies.sessionId;
	if(!sessionId){
		res.redirect('/home');
		return; 
		}
	Session.findOne({sessionId:sessionId}).then(function(session){
		if(!session){
			let newSession=new Session({
				sessionId:sessionId,
				cart:[productId]
			})
			newSession.save();
		}
		else{
			session.cart=[...session.cart,productId]
			session.save();
		}
	})
	res.redirect('/');

}