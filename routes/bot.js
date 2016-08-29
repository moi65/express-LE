"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
      res.render('bot.html'); //, { title: 'Express LAB' , username: 'moi65' });
});

/* GET ... page. */
router.get('/bot', function (req, res) {
      res.render('bot.html'); //, { title: 'Express LAB' , username: 'moi65' });
});

module.exports = router;