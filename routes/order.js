var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.post('/', function(req, res, next) {
    Proxy.order.addNewOrder(req.body, function(err, result) {
        if (err) {
            console.log(err);
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

router.delete('/:oid', function(req, res, next) {
    req.params.oid = req.params.oid || null;
    if (req.params.oid) {
        Proxy.order.deleteOrder(req.params.oid, function(err, result) {
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
            err: 'oid required'
        });
    }
});

router.put('/:oid', function(req, res, next) {
    req.params.oid = req.params.oid || null;
    if (req.params.oid) {
        Proxy.order.changeOrderState(req.params.oid, req.body.status, function(err, result) {
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
            err: 'oid required'
        });
    }
});

router.get('/', function(req, res, next) {
    req.query.offset = req.query.offset || 0;
    req.query.q = req.query.q || null;
    req.query.oid = req.query.oid || null;
    req.query.uid = req.query.uid || null;
    req.query.rid = req.query.rid || null;
    if (req.query.uid) {
        Proxy.order.getOrderList(req.query.uid, req.query.offset, function(err, result) {
            if (err) {
                console.log(err);
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
    else if (req.query.rid) {
        Proxy.order.getOrderListByRestaurant(req.query.rid, req.query.offset, function(err, result) {
            if (err) {
                console.log(err);
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
    else if (req.query.oid) {
        Proxy.order.getOrderById(req.query.oid, function(err, result) {
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
            err: 'oid required'
        });
    }
});

module.exports = router;