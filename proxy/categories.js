var conn = require('../models/db.js');

exports.getCategoriesList = function(callback) {
	var sql = "select * from categories";
	conn.query(sql, callback);
};