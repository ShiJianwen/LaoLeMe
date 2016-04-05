var conn = require('../models/db.js');

/**
 * 新增评论
 * @param {Object}   data     [评论信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewComment = function(data, callback) {
	var sql = "insert into comment values('', '"+data.restaurant+"', '"+data.food+"', '"+data.uid+"', '"+data.create_date+"', '"+data.content+"', '', '')";
	conn.query(sql, callback);
};

/**
 * 删除评论
 * @param  {String}   cid      [评论id]
 * @param  {Function} callback [回调函数]
 */
exports.deleteComment = function(cid, callback) {
	var sql = "delete from comment where id='"+cid+"'";
	conn.query(sql, callback);
};

/**
 * 获取评论列表
 * @param  {String}   offset   [间隔]
 * @param  {Function} callback [回调函数]
 */
exports.getCommentList = function(fid, offset, callback) {
	var sql = "select comment.*, user.realname as username from comment, user where food='"+fid+"' and user.id=comment.uid limit 10 offset "+offset+"";
	conn.query(sql, callback);
};

exports.getCommentByUid = function(uid, offset, callback) {
	var sql = "select * from comment where uid='"+uid+"' limit 10 offset "+offset+"";
	conn.query(sql, callback);
};

exports.getCommentById = function(cid, callback) {
	var sql = "select comment.*, user.realname from comment, user where comment.id='"+cid+"' and user.id=comment.uid";
	conn.query(sql, callback);
};

exports.getCommentListByRestaurant = function(rid, offset, callback) {
	var sql = "select comment.*, user.realname as username, food.name as foodname from comment, user, food where comment.restaurant='"+rid+"' and user.id=comment.uid and food.id=comment.food limit 10 offset "+offset+"";
	conn.query(sql, callback);
};

/**
 * 回复评论
 * @param  {String}   cid      [评论id]
 * @param  {String}   content  [评论内容]
 * @param  {Function} callback [回调函数]
 */
exports.replyComment = function(cid, content, callback) {
	var sql = "update comment set reply='"+content+"' where id='"+cid+"'";
	conn.query(sql, callback);
};

