var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');
var middleware = require('../middleware/middleware.js');
router.post('/', middleware.isLoggedIn, function(req, res, next) {
    Proxy.restaurant.addNewRestaurant(req.body, function(err, result) {
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

router.put('/:rid', function(req, res, next) {
    req.params.rid = req.params.rid || null;
    if (req.params.rid) {
        Proxy.restaurant.rewriteRestaurant(req.params.rid, req.body, function(err, result) {
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
    } else {
        res.status(400).send({
            msg: 'error',
            err: 'please select an restaurant'
        });
    }
});

router.get('/', function(req, res, next) {
    req.query.offset = req.query.offset || 0;
    req.query.q = req.query.q || null;
    req.query.rid = req.query.rid || null;
    req.query.categories = req.query.categories || null;
    req.query.city = req.query.city || null;
    req.query.bid = req.query.bid || null;
    //获取指定店铺
    if (req.query.rid) {
        Proxy.restaurant.getOneRestaurant(req.query.rid, function(err, result) {
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
    else if (req.query.bid) {
        Proxy.restaurant.getRestaurantByBoss(req.query.bid, function(err, result) {
            if (err) {
                res.status(500).send({
                    msg: 'error',
                    err: err
                });
            } else {
                return res.send({
                    msg: 'success',
                    result: result
                });
            }
        });
    }
    //店铺搜索
    else if (req.query.q) {
        Proxy.restaurant.searchRestaurant(req.query.q, function(err, result) {
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

    else if (req.query.categories) {
        Proxy.restaurant.getRestaurantByCategories(req.query.categories, function(err, result) {
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
    else if (req.query.city) {
        Proxy.restaurant.getRestaurantListByPlace(req.query.city, req.query.offset, function(err, result) {
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
        Proxy.restaurant.getRestaurantList(req.query.offset, function(err, result) {
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
});

router.delete('/:rid', middleware.isLoggedIn, function(req, res, next) {
    req.params.rid = req.params.rid || null;
    if (req.params.rid) {
        Proxy.restaurant.deleteRestaurant(req.params.rid, function(err, result) {
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
            err: 'please select an restaurant'
        });
    }
});


module.exports = router;