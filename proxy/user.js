var conn = require('../models/db.js');

/**
 * 添加新用户
 * @param {Object}   data     [需要添加的用户]
 * @param {Function} callback [回调函数]
 */
exports.addNewUser = function(data, callback) {
    var sql = "insert into user values('', '" + data.phone + "', '" + data.password + "', '" + data.realname + "', '" + data.sex + "', '" + data.addr + "')";
    conn.query(sql, callback);
};

/**
 * 修改用户资料
 * @param  {String}   uid      [用户id]
 * @param  {Object}   data     [用户资料]
 * @param  {Function} callback [回调函数]
 */
exports.rewriteUser = function(uid, data, callback) {
    var sql = "update user set realname='" + data.realname + "', sex='" + data.sex + "', phone='" + data.phone + "', addr='" + data.addr + "' where id='" + uid + "'";
    conn.query(sql, callback);
};

/**
 * 删除用户
 * @param  {String}   uid      [用户id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteUser = function(uid, callback) {
    var sql = "delete from user where id='" + uid + "'";
    conn.query(sql, callback);
};

/**
 * 获取用户资料
 * @param  {String}   uid      [用户id]
 * @param  {Function} callback [回调函数]
 */
exports.getUser = function(uid, callback) {
    var sql = "select * from user where id = " + uid + "";
    conn.query(sql, callback);
};

exports.getUserByPhone = function(username, callback) {
    var sql = "select * from user where phone="+username+"";
    conn.query(sql, callback);
};
/**
 * 获取用户列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getUserList = function(offset, callback) {
    console.log(offset);
    var sql = "select * from user limit 10 offset "+offset+"";
    conn.query(sql, callback);
};

/**
 * 用户登录
 * @param  {String}   username [用户名]
 * @param  {String}   password [密码]
 * @param  {Function} callback [回调函数]
 */
exports.doLogin = function(username, password, callback) {
    var sql = "select * from user where username='" + username + "' and password='" + password + "'";
    conn.query(sql, callback);
};