var mysql = require('mysql');
var dev = false;
var conn = mysql.createConnection({
    host: dev ? '127.0.0.1' : '119.29.73.44',
    user: dev ? 'root' : 'lowen',
    password: dev ? 'shijianwen' : 'laoleme',
    database: dev ? 'laoleme' : 'laoleme',
    port: dev ? 3306 : 3306
});
conn.connect(function(err) {
	if(!err) {
		console.log('db connected');
	} else {
		console.log('db connect failed');
		console.log(err);
		return false;
	}
});
module.exports = conn;