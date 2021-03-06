var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var step2 = require('./routes/step2');
var festival = require('./routes/festival');

// load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://localhost/test')
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', index);
app.use('/users', users);
app.use('/step2', step2);
app.use('/festival', festival);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('잘못된 경로로 접근했습니다. 주소를 확인해주세요.');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

if (app.get('env') ==='distribution'){
    console.log("배포");
    process.title='distribution';
    process.env.PORT = 80;
}

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8081;
module.exports = app;

var server = app.listen(port, function () {
    console.log("Express server has started on port " + port);
});

