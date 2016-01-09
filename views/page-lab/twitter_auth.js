//File Name: social_signin.js
var express = require('express');
var app = express();

//NPM Module To parse the Query String and to build a Query String
var qs = require("querystring");
//NPM Module to make HTTP Requests
var request = require("request");

//URL To obtain Request Token from Twitter
var requestTokenUrl = "https://api.twitter.com/oauth/request_token";
//To be obtained from the app created on Twitter

app.engine('html', require('ejs').renderFile);  //A+ pas besoin de l'extention .ejs , .html suffit !

var CONSUMER_KEY = "kuDm1KBKBJH3PpusFxcAA";
var CONSUMER_SECRET = "5wOFqJe4R0Kf6SV9tXuqrzkpD7t7d8cvwZhPC7TW8";
//Oauth Object to be used to obtain Request token from Twitter
var oauth = {
  callback : "http://localhost:3000/signin-with-twitter",
  consumer_key  : CONSUMER_KEY,
  consumer_secret : CONSUMER_SECRET
}

var oauthToken = "";
var oauthTokenSecret = "";

app.get('/', function (req, res) {
  //Step-1 Obtaining a request token
  request.post({url : requestTokenUrl, oauth : oauth}, function (e, r, body){
    //Parsing the Query String containing the oauth_token and oauth_secret.

    var reqData = qs.parse(body);

    oauthToken = reqData.oauth_token;

    oauthTokenSecret = reqData.oauth_token_secret;

    //Step-2 Redirecting the user by creating a link

    //and allowing the user to click the link

    var uri = 'https://api.twitter.com/oauth/authenticate'+ '?' + qs.stringify({oauth_token: oauthToken})

    res.render('home', {url : uri});

  });

});

app.listen(3000, function(){
  console.log('Server up: http://localhost:3000');

});
