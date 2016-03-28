exports.isLoggedIn = function(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.status(401).send({
		msg: 'error',
		err: 'unauthenticated'
	});
};