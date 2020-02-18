var User=require('../models/user.model');

module.exports.login=function( req, res ){
	res.render('auth/login');
}
module.exports.cart=function(req,res){
	res.render('auth/cart');
}		
module.exports.postLogin=function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	var errors=[];
	User.findOne({username:username },function(err,users){
		if(err){
			console.log('co loi');
			res.redirect('/auth');
			return;
		};
		if(!users){
			errors.push(" Email doesn't exist.");
			res.render('auth/login',{errors:errors});
			return;
		}
		console.log(users);
		if(users.password!==password){
			console.log(users.password)
			errors.push("PassWord wrongs.");
			res.render('auth/login',{errors:errors});
			return;
		}
		res.cookie('idUser',users._id,{signed: true});
		
		res.redirect('/auth/cart');

	});
}