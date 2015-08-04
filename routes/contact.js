var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

router.get('/', function(req, res) {
    res.render('templates/contact');
});

router.post('/greeting', function(req, res) {
  console.log(req.body);
  res.redirect('/');
  // res.send('Thanks for contacting')
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'katy.justiss@gmail.com',
        pass: 'userpass'
    }
});

module.exports = router;
