var express = require('express');
var router = express.Router();
var Proxy = require('../proxy/index.js');
var nodegrass = require('nodegrass');
var config = {
	key: 'OPSBZ-QC3W4-OFYUS-DEJR2-L4QPV-3LFK7'
};

router.get('/ip', function(req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.send({
		result: ip
	});
});

router.get('/address', function(req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	nodegrass.get('http://apis.map.qq.com/ws/location/v1/ip?ip='+ip.split(', ')[0]+'&key='+config.key, function(data, status, header) {
		if(status === 200) {
			res.send({
				result: data
			});
		} else {
			res.status(500).send({
				result: data
			});
		}
	});
});

router.get('/searchsuggest', function(req, res, next) {
	nodegrass.get('http://apis.map.qq.com/ws/place/v1/suggestion?region='+req.query.region+'&keyword='+req.query.keyword+'&key='+config.key, function(data, status, header) {
		res.send({
			result: data
		});
	});
});

router.get('/geocoder', function(req, res, next) {
	console.log(req.query.address);
	nodegrass.get('http://apis.map.qq.com/ws/geocoder/v1?address='+req.query.address+'&key='+config.key, function(data, status, header) {
		if(status === 200) {
			res.send({
				result: data
			});
		} else {
			res.status(500).send({
				result: data
			});
		}
	});
});

module.exports = router;