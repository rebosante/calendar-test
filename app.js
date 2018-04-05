var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'expanded'
}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
