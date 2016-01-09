'uses strict'

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

var app = express();

/** --- CONFIGURATION --- **/

/* Développement web avec Node.js, Express.js, Jade et MongoDB 7 MARS 2015 GEEG 
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream }));*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || appData.port);
app.set('views', __dirname + '/views');
//app.set('public', __dirname + '/public');
app.set('env', 'development');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(logger('dev'));
app.use(cookieParser());
app.use(session({ secret: 'abitbol', resave: true, saveUninitialized: true }));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon4.ico'));
app.engine('html', require('ejs').renderFile);  //A+ pas besoin de l'extention .ejs , .html suffit !

/** --- ROUTES --- **/
var routes = require('./routes/index');
var users = require('./routes/users');
var work = require('./routes/work');
app.use('/', routes);
app.use('/users', users);
app.use('/work', work);

// error handlers

// development error handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/** --- SERVEUR --- **/
if (app.get('env') === 'dev') {
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

var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";

// Starts the server itself
var server = http.createServer(app).listen(port, host, function () {
    console.log("Server listening to %s:%d within %s environment", host, port, app.get('env'));
});

/********************************
    SOCKET.IO
    ---------
    Back-End
*********************************/

// Chargement de socket.io
var io = require('socket.io').listen(server);

var data;
var tok;

var uncountable = [
    'advice',
    'enegery',
    'excretion',
    'digestion',
    'cooperation',
    'health',
    'justice',
    'jeans',
    'labour',
    'machinery',
    'equipment',
    'information',
    'pollution',
    'sewage',
    'paper',
    'money',
    'species',
    'series',
    'rain',
    'rice',
    'fish',
    'sheep',
    'moose',
    'deer',
    'bison',
    'proceedings',
    'shears',
    'pincers',
    'breeches',
    'hijinks',
    'clippers',
    'chassis',
    'innings',
    'elk',
    'le rhinoceros',
    'swine',
    'you',
    'news'
];

const c_id = "UGhpbGlwcGU2NQBv";

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    
    console.log('Un client ce connecte !');
    
    //Attach a 'disconnect' event handler to the socket
    socket.on('disconnect', function () {
        console.log('Un client ce déconnecte !');
    });
});


io.sockets.on('connection', function (socket) {
    /*
        Message envoyé au Front-end ( réponse )
                                                                                    */
    socket.emit('message-backend', 'Vous &#234;tes bien connect&#233; !, dis le backend!', { 'id': c_id });
    
    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
        console.log('Un client me parle ! Il me dit : ' + message);
    });
    
    // Quand le serveur ...
    socket.on('message-input', function (value, cmd) {
        
        console.log('Input : ' + value, cmd);
        
        if (cmd == 'keyup') {
            var select = Array();
            
            for (var i = 0; i < uncountable.length; i++) {
                if (uncountable[i].indexOf(String.fromCharCode(value).toLowerCase()) == 0) {
                    select.push(uncountable[i]);
                }
            }
            //console.log(">>  ",select, String.fromCharCode(value));   
            socket.emit('data-backend', select , { 'id': c_id });
        }
        
    });
    
    /*
        Message venant du Front-end (Question, commande, ect, ...)
                                                                                                                                 */
    
    socket.on('nina-message', function (message) {
        
        console.log('Nina me parle ! Elle me dit : ' + message);
        
        var text;
        switch (message) {
            case 'How old are you?':
                text = "";
                data = phrases_fr.phrases.split('\n');
                
                
                for (var i = 0; i < data.length; i++) {
                    
                    if (data[i].indexOf("A") == 0) {
                        select.push(data[i])
                          
                    }
                }
                
                
                socket.emit('data-backend', select , { 'id': c_id });
                
                
                break;
            case 0:
                text = "Today is Sunday";
                break;
            default:
                text = "Looking forward to the Weekend";
        }
        
        
        
        tok = text.match(/[A-z\u00E0-\u00FC]+/g);
        //socket.emit('message-backend', tok, { 'id': c_id });

       // var data = fs.readFileSync('message.txt', "UTF-8");
        //socket.emit('message-backend', data, { 'id': c_id });
    });
    
});


