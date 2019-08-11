var User=require('../models/user.model');

module.exports.login=function( req, res ){
	res.render('auth/login');
}
module.exports.postLogin=function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	var errors=[];
	User.find({username:username}).then(function(user){
		console.log(user);
 		if(!user){
 			res.redirect('/auth');
 			return;

 		}
 		if(user.password!==password){
 			res.redirect('/auth');
 			return;
 		}
 		res.cookie("userId",user.id);
 		res.redirect('/home');
 })
	res.redirect('/auth');
}