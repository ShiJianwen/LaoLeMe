var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');
var middleware = require('../middleware/middleware.js');

router.get('/', function(req, res, next) {
	res.sendFile('/dashboard/index.html');
});

module.exports = router;