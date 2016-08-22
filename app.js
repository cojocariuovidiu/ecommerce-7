var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs =   require('hbs');
var fs = require('fs');
var passport = require('passport');
var session = require('express-session');
var load = require('express-load');

var app = express();

// bd
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

var partialsDir = __dirname.replace("routes", "") + '/views/admin/partials';
var filenames = fs.readdirSync(partialsDir);

// Registra todas Partials html
filenames.forEach(function (filename) {
  var matches = /^([^.]+).html/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuracao do passport
app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// permite passar msg do passport para o tpl
var flash = require('connect-flash');
app.use(flash());

// define as estrategias do passport
//require('./auth.js')(passport);

// define as rotas
//require('./routes.js')(app, passport);
//require('./routes/admin/home.js')(app);

// carrega MVC
load('auth.js')
  .then('controllers')
  .then('routes')
  .into(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


module.exports = app;
