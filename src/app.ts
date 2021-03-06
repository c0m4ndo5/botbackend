var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
//ar settings = require('../data/settings.json');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/files',express.static(path.join(__dirname, '../files')));

//Setup cookies
var cookieKey;
//if(process.env.cookieKey)
  cookieKey = process.env.cookieKey;
//else{
//  cookieKey = settings.cookieKey;
//}

app.use(cookieSession({
  secret: cookieKey,
  signed: true,
  maxAge: 24 * 60 * 60 * 1000
}));

var API = require('./chatAPI/APICallResolver');
app.use('/api', API);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  //err.status = 404;
  //res.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send("Sorry, there was a problem")
});

module.exports = app;
