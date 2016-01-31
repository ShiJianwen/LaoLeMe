var express = require('express');
var router = express.Router();
var conn = require('../models/db.js');

router.get('/', function(req, res, next) {
	console.log('boss');
});

module.exports = router;