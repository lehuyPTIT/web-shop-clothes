var User=require('../models/user.model');

module.exports.login=function( req, res ){
	res.render('auth/login');
}