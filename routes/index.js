var express = require('express');
var router = express.Router();
const moment = require('moment');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

/* POST new message */
router.post('/new', function (req, res, next) {
  const newMessage = {
    text: req.body.text,
    user: req.body.username,
    added: new Date().toLocaleString(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
