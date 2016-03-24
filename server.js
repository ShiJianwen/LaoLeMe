var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('express-flash');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var middleware = require('./middleware/middleware.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'laoleme.duapp.com',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use('root', new LocalStrategy(function(username, password, done) {
    var administrator = {
        id: '1',
        username: 'root',
        password: 'root'
    };
    if (username !== administrator.username) {
        return done(null, false, {
            message: '用户名错误'
        });
    }
    if (password !== administrator.password) {
        return done(null, false, {
            message: '密码错误'
        });
    }

    return done(null, administrator);
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
//各种路由各种屌 
// app.use('/api/v1', middleware.isLoggedIn);
app.use('/api/v1/user', middleware.isLoggedIn, routes.user);
app.use('/api/v1/boss', routes.boss);
app.use('/api/v1/restaurant', routes.restaurant);
app.use('/api/v1/food', routes.food);
app.use('/api/v1/order', routes.order);
app.use('/api/v1/comment', routes.comment);
app.use('/api/v1/feedback', routes.feedback);
app.use('/api/v1/message', routes.message);
app.use('/api/v1/helper', routes.helper);
app.use('/api/v1/categories', routes.categories);

app.use('/dashboard', middleware.isLoggedIn, function(req, res) {
    res.sendfile('./dashboard/index.html');
});
app.post('/api/v1/login', function(req, res, next) {
    console.log('login');
    passport.authenticate('root', function(err, user, info) {
        if(err) {
            return next(err);
        }
        if(!user) {
            res.status(400).send(info);
        }
        console.log(user);
        req.logIn(user, function(err) {
            if(err) {
                return next(err);
            } 
            console.log(req.session);
            res.send(user);
        });
    })(req, res, next);
});
app.get('/api/v1/logout', function(req, res) {
    req.logout();
    res.send({msg: '退出登录'});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
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
        error: {}
    });
});

app.listen(18080, function() {
    console.log('the server is listening at localhost:18080');
});

module.exports = app;