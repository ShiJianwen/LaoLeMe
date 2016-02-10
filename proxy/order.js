var conn = require('../models/db.js');

/**
 * 新建订单
 * @param {Object}   data     [订单信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewOrder = function(data, callback) {
	var sql = "insert into orders values('', '"+data.user+"', '"+data.restaurant+"', '"+data.food+"', '"+data.addr+"', '"+data.phone+"', '"+data.price+"', '"+data.create_date+"', '"+data.note+"', '"+data.status+"')";
	conn.query(sql, callback);
};

/**
 * 取消订单
 * @param  {String}   oid      [订单id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteOrder = function(oid, callback) {
	var sql = "delete from orders where id='"+oid+"'";
	conn.query(sql, callback);
};

/**
 * 修改订单状态
 * @param  {String}   oid      [订单id]
 * @param  {String}   status   [目标状态]
 * @param  {Function} callback [回调函数]
 */
exports.changeOrderState = function(oid, status, callback) {
	var sql = "update orders set status='"+status+"' where id='"+oid+"'";
	conn.query(sql, callback);
};

/**
 * 获取订单列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getOrderList = function(uid, offset, callback) {
	var sql = "select * from orders limit 10 offset "+offset+" where user='"+uid+"'";
	conn.query(sql, callback);
};

/**
 * 根据id获取订单信息
 * @param  {String}   oid      [订单id]
 * @param  {Function} callback [回调函数]
 */
exports.getOrderById = function(oid, callback) {
	var sql = "select * from orders where id='"+oid+"'";
	conn.query(sql, callback);
};



