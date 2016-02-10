var conn = require('../models/db.js');

/**
 * 新增店铺
 * @param {Object}   data     [店铺信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewRestaurant = function(data, callback) {
	var sql = "insert into restaurant values('', '"+data.name+"', '"+data.categories+"', '"+data.boss+"', '"+data.addr+"')";
	conn.query(sql, callback);
};

/**
 * 修改店铺信息
 * @param  {String}   rid      店铺id
 * @param  {Object}   data     店铺信息
 * @param  {Function} callback 回调函数
 */
exports.rewriteRestaurant = function(rid, data, callback) {
	var sql = "update restaurant set name='"+data.name+"', categories='"+data.categories+"', addr='"+data.addr+"' where id='"+rid+"' ";
	conn.query(sql, callback);
};

/**
 * 获取指定店铺信息
 * @param  {String}   rid      店铺id
 * @param  {Function} callback 回调函数
 */
exports.getOneRestaurant = function(rid, callback) {
	var sql = "select * from restaurant where id='"+rid+"'";
	conn.query(sql, callback);
};

/**
 * 获取店铺列表
 * @param  {String}   offset   [间隔数]
 * @param  {Function} callback [回调函数]
 */
exports.getRestaurantList = function(offset, callback) {
	var sql = "select * from restaurant limit 10 offset "+offset+"";
	conn.query(sql, callback);
};

/**
 * 查询店铺
 * @param  {String}   query    [查询体]
 * @param  {Function} callback [回调函数]
 */
exports.searchRestaurant = function(query, callback) {
	var sql = "select * from restaurant where name like '%"+query+"%'";
	conn.query(sql, callback);
};

/**
 * 根据分类获取店铺
 * @param  {String}   categories [分类id]
 * @param  {Function} callback   [回调函数]
 */
exports.getRestaurantByCategories = function(categories, callback) {
	var sql = "select * from restaurant where categories = '"+categories+"'";
	conn.query(sql, callback);
};

/**
 * 删除店铺
 * @param  {String}   rid      [店铺id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteRestaurant = function(rid, callback) {
	var sql = "delete from restaurant where id='"+rid+"'";
	conn.query(sql, callback);
};