var express = require('express')
var router = express.Router();

var controller=require('../controllers/home.controller');

router.get('/home',controller.home);
router.get('/',controller.index);
router.get('/contact',controller.contact);
router.get('/home/product/:ad',controller.productSingle);


module.exports=router;