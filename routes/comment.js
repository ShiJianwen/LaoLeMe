var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.post('/', function(req, res, next) {
    Proxy.comment.addNewComment(req.body, function(err, result) {
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

router.delete('/:cid', function(req, res, next) {
    req.params.cid = req.params.cid || null;
    if (req.params.cid) {
        Proxy.comment.deleteComment(req.params.cid, function(err, result) {
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
            err: 'cid required'
        });
    }
});

router.get('/', function(req, res, next) {
    req.query.offset = req.query.offset || 0;
    req.query.uid = req.query.uid || null;
    req.query.fid = req.query.fid || null;
    req.query.rid = req.query.rid || null;
    req.query.cid = req.query.cid || null;
    if (req.query.fid) {
        Proxy.comment.getCommentList(req.query.fid, req.query.offset, function(err, result) {
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
    } else if (req.query.uid) {
        Proxy.comment.getCommentByUid(req.query.uid, req.query.offset, function(err, result) {
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
    } else if (req.query.rid) {
        Proxy.comment.getCommentListByRestaurant(req.query.rid, req.query.offset, function(err, result) {
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
    } else if(req.query.cid) {
        Proxy.comment.getCommentById(req.query.cid, function(err, result) {
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

router.put('/:cid', function(req, res, next) {
    req.params.cid = req.params.cid || null;
    if (req.params.cid) {
        Proxy.comment.replyComment(req.params.cid, req.body.content, function(err, result) {
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
            err: 'cid required'
        });
    }
});

module.exports = router;