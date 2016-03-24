exports.isLoggedIn = function(req, res, next) {
	console.log(req.session);
	if(req.isAuthenticated()) {
		return next();
	}
	res.status(401).send({
		msg: 'error',
		err: 'unauthenticated'
	});
};