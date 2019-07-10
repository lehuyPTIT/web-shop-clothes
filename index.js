const express = require('express')
const app = express()
const port = 3000;
var mongoose=require('mongoose');

require('dotenv').config();

var homeRoutes =require('./routes/home.route');

app.use(express.static('public'));

mongoose.connect(process.env.DB_HOST);

app.set('view engine', 'pug');
app.set('views', './views');


app.use('/home',homeRoutes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))