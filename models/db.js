var mysql = require('mysql');
var dev = false;
var conn = mysql.createConnection({
    host: dev ? '127.0.0.1' : 'sqld.duapp.com',
    user: dev ? 'root' : '87b918b63554437c8da82874f7fd958b',
    password: dev ? 'shijianwen' : 'd15e4fcb62ba45dba9395418ee12a472',
    database: dev ? 'laoleme' : 'grjPlADKzaEKwNurAdGY',
    port: dev ? 3306 : 4050
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