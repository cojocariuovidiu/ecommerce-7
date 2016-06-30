module.exports = function( app, passport ) {

	// login
	var login = require('./routes/login');
	app.use('/login', login);

	//admin 
	var admin = require('./routes/admin');
	app.use('/admin', admin);

	//apis
	var api = require('./routes/api');
	app.use('/api', api);
}