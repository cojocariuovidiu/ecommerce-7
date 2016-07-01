var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	
	res.redirect('/login');
}

module.exports = function( app, passport ) {

	// login
	var login = require('./routes/login')(passport);
	app.use('/login', login);

	//admin 
	var admin = require('./routes/admin')(isAuthenticated);
	app.use('/admin', admin);

	//apis privada
	var api = require('./routes/api');
	app.use('/api', api);
}