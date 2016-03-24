var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');
var middleware = require('../middleware/middleware.js');

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

router.get('/', function(req, res, next) {
    req.query.uid = req.query.uid || null;
    req.query.offset = req.query.offset || 0;
    if (req.query.uid) {
        Proxy.user.getUser(req.query.uid, function(err, result) {
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
    } 
    else {
        Proxy.user.getUserList(req.query.offset, function(err, result) {
            if(err) {
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
    }   
});

module.exports = router;