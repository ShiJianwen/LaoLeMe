var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');

router.post('/', function(req, res, next) {
	Proxy.feedback.addNewFeedBack(req.body, function(err, result) {
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