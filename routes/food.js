var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.post('/', function(req, res, next) {
	Proxy.food.addNewFood(req.body, function(err, result) {
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

router.put('/:fid', function(req, res, next) {
	req.params.fid = req.params.fid || null;
	if(req.params.fid) {
		Proxy.food.rewriteFood(req.params.fid, req.body, function(err, result) {
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
		res.status(400).send({
			msg: 'error',
			err: 'fid required'
		});
	}
});

router.get('/', function(req, res, next) {
	req.query.offset = req.query.offset || 0;
	req.query.q = req.query.q || null;
	req.query.fid = req.query.fid || null;
	req.query.rid = req.query.rid || null;
	if(req.query.rid) {
		Proxy.food.getFoodList(req.query.rid, req.query.offset, function(err, result) {
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

	if(req.query.q) {
		Proxy.food.searchFood(req.query.q, function(err, result) {
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

	if(req.query.fid) {
		Proxy.food.getFoodById(req.query.fid, function(err, result) {
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

router.delete('/:fid', function(req, res, next) {
	req.params.fid = req.params.fid || null;
	if(req.params.fid) {
		Proxy.food.deleteFood(req.params.fid, function(err, result) {
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
		res.status(400).send({
			msg: 'error',
			err: 'fid required'
		});
	}
});

module.exports = router;