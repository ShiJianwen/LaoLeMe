var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');
router.get('/', function(req, res, next) {
	Proxy.categories.getCategoriesList(function(err, result) {
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