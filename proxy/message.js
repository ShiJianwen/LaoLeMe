var conn = require('../models/db.js');

/**
 * 新增消息
 * @param {Object}   data     [消息对象]
 * @param {Function} callback [回调函数]
 */
exports.addNewMsg = function(data, callback) {
	var sql = "insert into message values('', '"+data.receiver+"', '"+data.sender+"', '"+data.create_date+"', '"+data.content+"')";
	conn.query(sql, callback);
};

/**
 * 获取消息列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getMsgList = function(uid, offset, callback) {
	var sql = "select * from message limit 10 offset "+offset+" where receiver='"+uid+"'";
	conn.query(sql, callback);
};

/**
 * 把消息标为已读
 * @param  {String}   mid      [消息id]
 * @param  {Function} callback [回调函数]
 */
exports.readMsg = function(mid, callback) {
	var sql = "update message set is_read='1' where id='"+mid+"'";
	conn.query(sql, callback);
};