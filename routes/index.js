var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express' });
    //res.render('index.ejs', { title: 'Express EJS' });
    res.render('index.html', { title: 'Express LAB' , username: 'moi65' });
});

module.exports = router;