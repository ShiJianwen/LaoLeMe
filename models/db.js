var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'shijianwen',
    database: 'laoleme',
    port: 3306
});
conn.connect(function(err) {
	if(!err) {
		console.log('连接数据库成功');
	} else {
		console.log('连接数据库出错');
		return false;
	}
});
module.exports = conn;