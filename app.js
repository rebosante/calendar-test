var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'expanded'
}));
// Note: you must place sass-middleware *before* `express.static` or else it will
//app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
