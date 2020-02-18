// var User=require('../models/user.model');
// module.exports.checkLogin=function(req,res,next){
	
// 	var cookie=req.signedCookies.idUser;
	
// 	User.find({_id:cookie}).exec(function(err,user){
// 		if(err){
// 			console.log("loi");
// 		}
// 		if(!user){
// 			res.redirect('/auth');
// 			return;
// 		}
// 		next();
// 	});
// 	// User.findOne({_id:cookie},function(err,user){
// 	// 	console.log(user);
// 	// 	if(err){
// 	// 		console.log('co loi');
// 	// 		res.redirect('/auth');
// 	// 		return;
// 	// 	};
// 	// 	if(!user){
// 	// 		res.redirect('/auth');
// 	// 		return;
// 	// 	}
// 	// 	next();
	
// 	// });

	
// }