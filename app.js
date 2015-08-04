var express = require('express');
var bodyParser = require('body-parser');

//setting express to app
var app = express();

var route = require('./routes/main');
var about = require('./routes/about');
var contact = require('./routes/contact');

//ejs
app.set('view engine', 'ejs');
app.locals.title = 'KatyJustiss';
//required routes



//parsing form data
//app.use(bodyParser.urlencoded({extended:false}))

//using required routes
app.use('/', route);
app.use('/about', about);
app.use('/contact', contact);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
