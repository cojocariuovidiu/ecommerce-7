var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	
	res.redirect('/admin/login');
}

module.exports = function( app, passport ) {

	//admin 
	var admin = require('./routes/admin')(isAuthenticated, passport);
	app.use('/admin', admin);

	//apis privada
	var api = require('./routes/api')(isAuthenticated);
	app.use('/api', api);
}