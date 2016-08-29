"use strict";

var express = require('express');
var watson = require('watson-developer-cloud');
var url = require('url');

var router = express.Router();
var cors = require('cors');

var BLUEMIX_USERNAME = '74667589-ea37-48a4-9fb7-7ba8ef175845';
var BLUEMIX_PASSWORD = 'ZQFBjRhWG4cL';

/* GET ... page. */
router.get('/hear_it', function (req, res) {
    res.render('hear_it.html');
});

router.get('/myLab-0', function (req, res) {
    res.render('myLab-0.html');
});

router.get('/myLab-1', function (req, res) {
    res.render('myLab-1.html');
});

router.get('/api/speak', function(req, res) {
  var query = url.parse(req.url, true).query;

  var text_to_speech = watson.text_to_speech({
    username: BLUEMIX_USERNAME,
    password: BLUEMIX_PASSWORD,
    version: 'v1',
    url: 'https://stream.watsonplatform.net/text-to-speech/api'
  });

  var params = {
    text: query.text,
    voice: 'en-US_AllisonVoice', // Optional voice
    accept: 'audio/wav'
  };

  text_to_speech.synthesize(params).pipe(res);
});

/* ==========================================================================

   ========================================================================== */

// http://localhost:8000/users/ajax
router.get('/ajax', function (req, res) {
    res.render('ajax.html');
});

// Ajax (ok le 19.3.2015)
router.post('/ajax-1', cors(), function (req, res) {
   
    console.log(req.body.name, req.body.age, req.body);
    
    var age = req.body.age;
    res.json({
        message: 'hooray! welcome to our api!',
        nom: req.body.name,
        age: age
    });
})
// Ajax DB  OK!
.post('/ajax_db', cors(), function (req, res) {
    console.log("ajax db");
  
    res.json({
        "data": [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011/04/25",
      "$320,800"
    ]]
    });

}) 
// Ajax tags
.post('/ajax_tags', cors(), function (req, res) {
    console.log("ajax tags");
    
    console.log(req.body['someObject']);
    
    console.log(req.body['someObject']==='Nodejs and Expressjs sending ajax post request');
    //res.contentType('json');
    /*res.send({
        some: JSON.stringify({
            response: 'json'
        })
    });
   
    res.json({
        message: 'hooray! welcome to our api !',
        nom: "Dupond",        age: 50, tags: list
    }); */
});

/* -------------------------------------------------------------------------- */

router.get('/simple-cors', cors(), function (req, res) {
    res.json({
        text: 'Simple CORS requests are working. [GET]'
    });
});
router.head('/simple-cors', cors(), function (req, res) {
    res.send(204);
});
router.post('/simple-cors', cors(), function (req, res) {
    console.log('post >> ' + req.body['someObject']);
    res.json({
        text: 'Simple CORS requests are working. [POST]{OK} <br>'+ req.body['someObject']
    });
});


module.exports = router;




