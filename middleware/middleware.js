exports.isLoggedIn = function(req, res, next) {
	if(req.isAuthenticated()) {
		next();
	}
	res.status(401).send({
		msg: 'error',
		err: 'unauthenticated'
	});
};