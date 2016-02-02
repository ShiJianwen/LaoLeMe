var conn = require('../models/db.js');

exports.addNewFeedBack = function(data, callback) {
	var sql = "insert into feedback values('"+data.user+"', '"+data.create_date+"', '"+data.content+"', '"+data.contact+"')";
};