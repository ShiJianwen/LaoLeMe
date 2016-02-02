var conn = require('../models/db.js');

/**
 * 新增评论
 * @param {Object}   data     [评论信息]
 * @param {Function} callback [回调函数]
 */
exports.addNewComment = function(data, callback) {
	var sql = "insert into comment values('"+data.restaurant+"', '"+data.food+"', '"+data.uid+"', '"+data.create_date+"', '"+data.content+"', '"+data.star_num+"')";
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
	var sql = "select * from comment limit 10 offset '"+offset+"' where food='"+fid+"'";
	conn.query(sql, callback);
};

exports.getCommentByUid = function(uid, offset, callback) {
	var sql = "select * from comment limit 10 offset '"+offset+"' where uid='"+uid+"'";
	conn.query(sql, callback);
};

/**
 * 回复评论
 * @param  {String}   cid      [评论id]
 * @param  {String}   content  [评论内容]
 * @param  {Function} callback [回调函数]
 */
exports.replyComment = function(cid, content, callback) {
	var sql = "update comment set content='"+content+"' where id='"+cid+"'";
	conn.query(sql, callback);
};

