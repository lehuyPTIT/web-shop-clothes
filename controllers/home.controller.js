var Product=require('../models/product.model');


module.exports.home=function( req, res ){
	Product.find().then(function(products){
		res.render('home/index',{
			products: products
		})
	})
}
module.exports.index=function( req, res ){
	res.redirect('/home');
}
module.exports.contact=function(req,res){
	res.render('home/contact')
}

