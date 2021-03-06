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
var proxy = require('./proxy/index.js');
var middleware = require('./middleware/middleware.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//     res.header("X-Power-By", "3.2.1");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

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
        maxAge: 2 * 3600 * 1000
    },
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use('root', new LocalStrategy(function(username, password, done) {
    var administrator = [{
        id: '1',
        username: 'root',
        password: 'root'
    }];
    if (username !== administrator[0].username) {
        return done(null, false, {
            message: '用户名错误'
        });
    }
    if (password !== administrator[0].password) {
        return done(null, false, {
            message: '密码错误'
        });
    }

    return done(null, administrator);
}));

passport.use('local', new LocalStrategy(function(username, password, done) {
    proxy.user.getUserByPhone(username, function(err, user) {
        if (!user) {
            return done(null, false, {
                message: '用户名不存在'
            });
        }
        if (bcompare(password, user[0].password)) {
            return done(null, user);
        } else {
            return done(null, false, {
                message: '密码错误'
            });
        }
    });
}));

passport.use('boss', new LocalStrategy(function(username, password, done) {
    proxy.boss.getBossByPhone(username, function(err, user) {
        if (!user) {
            return done(null, false, {
                message: '用户名不存在'
            });
        }
        if (bcompare(password, user[0].password)) {
            return done(null, user);
        } else {
            return done(null, false, {
                message: '密码错误'
            });
        }
    });
}));

function bcompare(password, hash) {
    var crypto = require('crypto');
    var sha1 = crypto.createHash('sha1');
    sha1.update(password);
    var encode = sha1.digest('hex');
    return encode === hash;
}

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
//各种路由各种屌 
app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});
app.use('/api/v1/user', routes.user);
app.use('/api/v1/boss', middleware.isLoggedIn, routes.boss);
app.use('/api/v1/restaurant', routes.restaurant);
app.use('/api/v1/food', routes.food);
app.use('/api/v1/order', routes.order);
app.use('/api/v1/comment', routes.comment);
app.use('/api/v1/feedback', routes.feedback);
app.use('/api/v1/message', routes.message);
app.use('/api/v1/helper', routes.helper);
app.use('/api/v1/categories', routes.categories);

app.use('/dashboard', function(req, res) {
    res.sendfile('./dashboard/index.html');
});
app.post('/api/v1/login', function(req, res, next) {
    req.body.type = req.body.type || null;
    if (req.body.type === '1') {
        passport.authenticate('root', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).send(info);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.send(user);
            });
        })(req, res, next);
    }
    if (req.body.type === '2') {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).send(info);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.send(user);
            });
        })(req, res, next);
    }
    if (req.body.type === '3') {
        passport.authenticate('boss', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).send(info);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.send(user);
            });
        })(req, res, next);
    }
});
app.get('/api/v1/logout', function(req, res) {
    req.logout();
    res.send({
        msg: '退出登录'
    });
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