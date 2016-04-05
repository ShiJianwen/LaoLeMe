var conn = require('../models/db.js');

/**
 * 新增菜品
 * @param {Object}   data     [菜品信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewFood = function(data, callback) {
	var sql = "insert into food values('', '"+data.name+"', '"+data.restaurant+"', '"+data.price+"', '"+data.sale_num+"', '"+data.enable+"')";
	conn.query(sql, callback);
};

/**
 * 修改菜品信息
 * @param  {String}   fid      [菜品id]
 * @param  {Object}   data     [菜品信息]
 * @param  {Function} callback [回调函数]
 */
exports.rewriteFood = function(fid, data, callback) {
	var sql = "update food set name='"+data.name+"', price='"+data.price+"', enable='"+data.enable+"' where id='"+fid+"'";
	conn.query(sql, callback);
};


/**
 * 增加菜品销售量
 * @param  {String}   fid      [菜品id]
 * @param  {Function} callback [回调函数]
 */
exports.doSale = function(fid, callback) {
	var sql = "update food set sale_num=sale_num+1 where id='"+fid+"'";
	conn.query(sql, callback);
};

/**
 * 获取菜品列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getFoodList = function(rid, offset, callback) {
	var sql = "select * from food where restaurant="+rid+"";
	conn.query(sql, callback);
};

/**
 * 搜索菜品
 * @param  {String}   query    [菜品id]
 * @param  {Function} callback [回调函数]
 */
exports.searchFood = function(query, callback) {
	var sql = "select * from food where name like '%"+query+"%'";
	conn.query(sql, callback);
};

/**
 * 根据id获取菜品信息
 * @param  {String}   fid      [菜品id]
 * @param  {Function} callback [回调函数]
 */
exports.getFoodById = function(fid, callback) {
	var sql = "select * from food where id='"+fid+"'";
	conn.query(sql, callback);
};

/**
 * 删除菜品
 * @param  {String}   fid      [菜品id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteFood = function(fid, callback) {
	var sql = "delete from food where id='"+fid+"'";
	conn.query(sql, callback);
};





