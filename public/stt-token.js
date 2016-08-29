'use strict';

var express = require('express'),
  router = express.Router(), // eslint-disable-line new-cap
  vcapServices = require('vcap_services'),
  extend = require('util')._extend,
  watson = require('watson-developer-cloud');

// set up an endpoint to serve speech-to-text auth tokens
/*
{
  "credentials": {
    "url": "https://stream.watsonplatform.net/speech-to-text/api",
    "password": "xOKPUc8wHJCH",
    "username": "c6e71c9b-802e-4746-b0b2-f61fdeae970d"
  }
}
*/
// For local development, replace username and password or set env properties
var sttConfig = extend({
  version: 'v1',
  url: 'https://stream.watsonplatform.net/speech-to-text/api',
  username: process.env.STT_USERNAME || 'c6e71c9b-802e-4746-b0b2-f61fdeae970d',
  password: process.env.STT_PASSWORD || 'xOKPUc8wHJCH'
}, vcapServices.getCredentials('speech_to_text'));

var sttAuthService = watson.authorization(sttConfig);

router.get('/token', function(req, res) {
  sttAuthService.getToken({url: sttConfig.url}, function(err, token) {
    if (err) {
      console.log('Error retrieving token: ', err);
      res.status(500).send('Error retrieving token');
      return;
    }
    res.send(token);
  });
});

module.exports = router;
