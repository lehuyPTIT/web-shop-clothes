var express = require('express')
var router = express.Router();

var controller=require('../controllers/auth.controller');

router.get('/',controller.login);
router.post('/',controller.postLogin);
router.get('/cart',controller.cart);



module.exports=router;