const express = require('express')
const app = express()
const port = 3000;
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config();

var homeRoutes =require('./routes/home.route');
var authRoutes =require('./routes/auth.route');

app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
mongoose.connect(process.env.DB_HOST);

app.set('view engine', 'pug');
app.set('views', './views');


app.use('/',homeRoutes);
app.use('/auth',authRoutes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))