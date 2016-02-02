var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('this is user route');
    next();
});

//新用户注册
router.post('/', function(req, res, next) {
    Proxy.user.addNewUser(req.body, function(err, result) {
        if (err) {
            res.status(500).send({
                msg: 'error',
                err: err
            });
        } else {
            res.send({
                msg: 'success',
                result: result
            });
        }
    });
});

router.put('/:uid', function(req, res, next) {
    req.params.uid = req.params.uid || null;
    if (req.params.uid) {
        Proxy.user.rewriteUser(req.params.uid, req.body, function(err, result) {
            if (err) {
                res.status(500).send({
                    msg: 'error',
                    err: err
                });
            } else {
                res.send({
                    msg: 'success',
                    result: result
                });
            }
        });
    } else {
        res.status(400).send({
            msg: 'error',
            err: 'please select an user'
        });
    }
});

router.delete('/:uid', function(req, res, next) {
    req.params.uid = req.params.uid || null;
    if (req.params.uid) {
        Proxy.user.deleteUser(req.params.uid, function(err, result) {
            if (err) {
                res.status(500).send({
                    msg: 'error',
                    err: err
                });
            } else {
                res.send({
                    msg: 'success',
                    result: result
                });
            }
        });
    } else {
        res.status(400).send({
            msg: 'error',
            err: 'please select an user'
        });
    }
});

router.get('/:uid', function(req, res, next) {
    req.params.uid = req.params.uid || null;
    if (req.params.uid) {
        Proxy.user.getUser(req.params.uid, function(err, result) {
            if (err) {
                res.status(500).send({
                    msg: 'error',
                    err: err
                });
            } else {
                res.send({
                    msg: 'success',
                    result: result
                });
            }
        });
    } else {
        res.status(400).send({
            msg: 'error',
            err: 'please select an user'
        });
    }
});

router.post('/login', function(req, res, next) {
    req.query.type = req.query.type || null;
    if (req.query.type) {
        if (req.query.type === '1') {
            Proxy.user.doLogin(req.body.username, req.body.password, function(err, result) {
                if (err) {
                    res.status(500).send({
                        msg: 'error',
                        err: err
                    });
                } else {
                    if (result) {
                        res.send({
                            msg: 'success',
                            result: result
                        });
                    } else {
                        res.send({
                            msg: '登录失败'
                        });
                    }
                }
            });
        }
        if (req.query.type === '2') {
            Proxy.boss.doLogin(req.body.username, req.body.password, function(err, result) {
                if (err) {
                    res.status(500).send({
                        msg: 'error',
                        err: err
                    });
                } else {
                    if (result) {
                        res.send({
                            msg: 'success',
                            result: result
                        });
                    } else {
                        res.send({
                            msg: '登录失败'
                        });
                    }
                }
            });
        }
    } else {
        res.status(400).send({
            msg: 'error',
            err: 'please select a role'
        });
    }
});
module.exports = router;