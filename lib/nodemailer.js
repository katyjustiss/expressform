var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

module.exports = function(req) {
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'katyajustiss@gmail.com',
          pass: process.env.PASSWORD
      }
  });
  console.log(req);

  var emailOptions = {
    from: 'katyajustiss@gmail.com',
    to: req.email,
    subject: 'contact message',
    text: req.message
  }

  transporter.sendMail(emailOptions, function(error, info) {
    if(error) {
      console.log(error)
    }else {
      console.log('success ' + info)
    }
  });
}
