var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.post('/', function(req, res, next) {
	Proxy.message.addNewMsg(req.body, function(err, result) {
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
});

router.get('/', function(req, res, next) {
	req.query.uid = req.query.uid || null;
	req.query.offset = req.query.offset || 0;
	Proxy.message.getMsgList(req.query.uid, req.query.offset, function(err, result) {
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
});

rout.put('/:mid', function(req, res, next) {
	req.params.mid = req.params.mid || null;
	Proxy.message.readMsg(req.params.mid, function(err, result) {
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
});

module.exports = router;