var express = require('express')
var router = express.Router();
var controller=require('../controllers/cart.controller');

router.get('/add/:product_Id',controller.addToCart);


module.exports=router;