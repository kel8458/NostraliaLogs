var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	debug: true,
	indentedSyntax: false, // true = .sass and false = .scss
	sourceMap: true
}));

// Set favicon handler
app.use('/favicon.ico', express.static('public/favicon.ico'));

// Explicitly handle robots in middleware. No crawlers please!
app.use('/robots.txt', function(req, res, next) {
	res.type('text/plain')
	res.send("User-agent: *\nDisallow: /");
});

// Static serve everything from the public directory
app.use("/", express.static(path.resolve(__dirname, 'public')));


// App routing
app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;
