var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');



router.post('/', function(req, res, next) {
    var crypto = require('crypto');
    var sha1 = crypto.createHash('sha1');
    sha1.update(req.body.password);
    req.body.password = sha1.digest('hex');
    Proxy.boss.addNewBoss(req.body, function(err, result) {
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

router.put('/:bid', function(req, res, next) {
    req.params.bid = req.params.bid || null;
    if (req.params.bid) {
        Proxy.boss.rewriteBoss(req.params.bid, req.body, function(err, result) {
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
            err: 'please select a boss'
        });
    }
});

router.get('/', function(req, res, next) {
    req.query.bid = req.query.bid || null;
    req.query.offset = req.query.offset || 0;
    req.query.isBoss = req.query.isBoss || null;
    if (req.query.bid) {
        Proxy.boss.getBoss(req.query.bid, function(err, result) {
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
    } else if (req.query.isBoss === '1') {
        Proxy.boss.getHadResBossList(req.query.offset, function(err, result) {
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
    } else if(req.query.isBoss === '2') {
        Proxy.boss.getNotHadResBossList(req.query.offset, function(err, result) {
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
    } else {
        Proxy.boss.getBossList(req.query.offset, function(err, result) {
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
});

router.delete('/:bid', function(req, res, next) {
    req.params.bid = req.params.bid || null;
    if (req.params.bid) {
        Proxy.boss.deleteBoss(req.params.bid, function(err, result) {
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
            err: 'please select a boss'
        });
    }
});

module.exports = router;