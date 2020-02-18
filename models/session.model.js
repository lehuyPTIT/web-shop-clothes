var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
	name : String,
	price: String,
	image:String
});

var Product = mongoose.model('Session', sessionSchema, 'sessions');
module.exports=Product;