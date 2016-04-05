var conn = require('../models/db.js');

/**
 * 新增店铺
 * @param {Object}   data     [店铺信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewRestaurant = function(data, callback) {
	var sql = "insert into restaurant values('', '"+data.name+"', '"+data.boss+"', '"+data.city+"', '"+data.describe+"')";
	conn.query(sql, callback);
};

/**
 * 修改店铺信息
 * @param  {String}   rid      店铺id
 * @param  {Object}   data     店铺信息
 * @param  {Function} callback 回调函数
 */
exports.rewriteRestaurant = function(rid, data, callback) {
	var sql = "UPDATE restaurant SET name='"+data.name+"', city='"+data.city+"', restaurant.descrb='"+data.describe+"' where id='"+rid+"'";
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

exports.getRestaurantByBoss = function(bid, callback) {
	var sql = "select restaurant.* from restaurant where boss='"+bid+"'";
	conn.query(sql, callback);
};

/**
 * 获取店铺列表
 * @param  {String}   offset   [间隔数]
 * @param  {Function} callback [回调函数]
 */
exports.getRestaurantList = function(offset, callback) {
	var sql = "select restaurant.id, restaurant.name, restaurant.city, restaurant.descrb, boss.realname as boss from restaurant, boss where boss.id=restaurant.boss limit 10 offset "+offset+"";
	conn.query(sql, callback);
};

exports.getRestaurantListByPlace = function(city, offset, callback) {
	var sql = "select restaurant.id, restaurant.name, restaurant.city, boss.realname as boss from restaurant, boss where boss.id=restaurant.boss and restaurant.city = '"+ city +"' limit 10 offset "+offset+"";
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