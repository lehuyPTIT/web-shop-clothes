var User=require('../models/session.model');
module.exports.cart=function(req,res){
	res.render('auth/cart.pug')
}
module.exports.addToCart=function(req,res,next){
	var productId=req.params.product_Id;
	console.log(productId);
	// var sessionId=req.signedCookies.sessionId;
	// if(!sessionId){
	// 	res.redirect('/product');
	// 	return; 
	// }
	// var count=db.get('sessions')
	// .find({id: sessionId})
	// .get('cart.'+productId,0);

	// db.get('sessions')
	// .find({id:sessionId})
	// .set('cart.'+productId,count+1)
	// .write();

	res.redirect('/');
}