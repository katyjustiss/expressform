var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var email = require('../lib/nodemailer');

router.get('/', function(req, res) {
    res.render('templates/contact');
});

router.post('/greeting', function(req, res) {
  console.log(req.body);
  email(req.body)
  res.redirect('/');

});//end post

module.exports = router;
