const express = require('express')
const app = express()
const port = 3001;
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

require('dotenv').config();

var homeRoutes =require('./routes/home.route');
var authRoutes =require('./routes/auth.route');
var cartRoutes=require('./routes/cart.route');
var authMiddleware=require('./middlewares/auth.middleware');
var sessionMiddleware=require('./middlewares/session.middlewares');

app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('asda732asd'));
app.use(sessionMiddleware);
mongoose.connect(process.env.DB_HOST);

app.set('view engine', 'pug');
app.set('views', './views');


app.use('/',homeRoutes);
app.use('/auth',authRoutes);
app.use('/cart',cartRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))