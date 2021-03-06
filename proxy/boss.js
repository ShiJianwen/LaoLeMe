var conn = require('../models/db.js');

/**
 * 新增店家
 * @param {Object}   data     [店家资料]
 * @param {Function} callback [回调函数]
 */
exports.addNewBoss = function(data, callback) {
    var sql = "insert into boss values('' ,'" + data.phone + "', '" + data.password + "', '" + data.realname + "', '" + data.sex + "', '" + data.addr + "', '" + data.idcard + "')";
    conn.query(sql, callback);
};

/**
 * 修改店家资料
 * @param  {String}   bid      [店家id]
 * @param  {Object}   data     [需要更改的资料]
 * @param  {Function} callback [回调函数]
 */
exports.rewriteBoss = function(bid, data, callback) {
    var sql = "update boss set realname='" + data.realname + "', sex='" + data.sex + "', phone='" + data.phone + "', addr='" + data.addr + "', idcard='" + data.idcard + "' where id='" + bid + "'";
    conn.query(sql, callback);
};

/**
 * 获取店家资料
 * @param  {String}   bid      [店家id]
 * @param  {Function} callback [回调函数]
 */
exports.getBoss = function(bid, callback) {
    var sql = "select * from boss where id='" + bid + "'";
    conn.query(sql, callback);
};

/**
 * 获取店家列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getBossList = function(offset, callback) {
    var sql = "select * from boss limit 10 offset "+offset+"";
    conn.query(sql, callback);
};

exports.getHadResBossList = function(offset, callback) {
    var sql = "select * from boss where boss.id in (select boss from restaurant) limit 10 offset "+offset+"";
    conn.query(sql, callback);
};

exports.getNotHadResBossList = function(offset, callback) {
    var sql = "select * from boss where boss.id not in (select boss from restaurant) limit 10 offset "+offset+"";
    conn.query(sql, callback);
};
/**
 * 删除店家
 * @param  {String}   bid      [店家id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteBoss = function(bid, callback) {
    var sql = "delete from boss where id='" + bid + "'";
    conn.query(sql, callback);
};

/**
 * 用户登录
 * @param  {String}   username [用户名]
 * @param  {String}   password [密码]
 * @param  {Function} callback [回调函数]
 */
exports.doLogin = function(username, password, callback) {
    var sql = "select * from boss where username='" + username + "' and password='" + password + "'";
    conn.query(sql, callback);
};
exports.getBossByPhone = function(username, callback) {
    var sql = "select boss.*, restaurant.id as restaurant from boss, restaurant where phone="+username+" and restaurant.boss=boss.id";
    conn.query(sql, callback);
};