var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.get('/', function(req, res, next) {
    console.log('boss');
});

router.post('/', function(req, res, next) {
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

router.get('/:bid', function(req, res, next) {
    req.params.bid = req.params.bid || null;
    if (req.params.bid) {
        Proxy.boss.getBoss(req.params.bid, function(err, result) {
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