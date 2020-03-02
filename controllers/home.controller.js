var Product=require('../models/product.model');
var Session=require('../models/session.model');

module.exports.home=function( req, res,next ){
	let sessionId=req.signedCookies.sessionId;
	Session.findOne({sessionId:sessionId}).then(function(ses){
		let count;
		if(!ses)count=0;
		else count=ses.cart.length;
		Product.find().then(function(products){
				res.render('home/index',{
			products: products,count:count
			})
		})
	})
}	
module.exports.index=function( req, res ){
	let sessionId=req.signedCookies.sessionId;
	Session.findOne({sessionId:sessionId}).then(function(ses){
		let count;
		if(!ses)count=0;
		else count=ses.cart.length;
		Product.find().then(function(products){
				res.render('home/index',{
			products: products,count:count
			})
		})
	})}
module.exports.contact=function(req,res){
	res.render('home/contact')
}
module.exports.productSingle=function(req,res){
	res.render('home/productSingle')
}
