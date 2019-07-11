var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	yourName : String,
	email : String,
	userName: String,
	password:String
});

var User = mongoose.model('User', userSchema, 'users');
module.exports=User;