'uses strict';

/** --- MODULES --- **/
var http = require('http'),
	session = require('express-session'),
	errorHandler = require('errorhandler'),
	appData = require('./config/config.js');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var ejs = require('ejs');

var app = express();

/** --- CONFIGURATION --- **/

/* Développement web avec Node.js, Express.js, Jade et MongoDB 7 MARS 2015 GEEG 
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream }));*/

// view engine setup


app.set('views', __dirname + '/views');
app.set('env', 'development');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret: 'service-du-même-nom',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.engine('html', require('ejs').renderFile); //A+ pas besoin de l'extention .ejs , .html suffit !

/** --- ROUTES --- **/
var routes = require('./routes/index');
var users = require('./routes/users');
var work = require('./routes/work');
var bot = require('./routes/bot');
app.use('/', routes);
app.use('/users', users);
app.use('/work', work);
app.use('/bot', bot);

// error handlers

// development error handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

console.log(app.get('env'));
/** --- SERVEUR --- **/
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


/********************************
    Kick up the server!!!!
*********************************/

var http = require("http");

console.log(appData.port, process.env.PORT, process.env.PORT || appData.port);

var port = process.env.PORT || appData.port;
var host = process.env.HOST || "127.0.0.1";

//app.set('port', process.env.PORT || appData.port);

// Starts the server itself
var server = http.createServer(app).listen(port, host, function () {
	console.log("Server listening to %s:%d within %s environment", host, port, app.get('env'));
});