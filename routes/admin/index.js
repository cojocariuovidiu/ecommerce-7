module.exports = function(app){
	
	var controller = app.controllers.admin.index;

	// home
	app.get('/admin', app.auth.isAuthenticated, controller.index);

	// login
	app.get('/admin/login', controller.login);
	app.post('/admin/login', app.auth.passport.authenticate('login', {
		successRedirect: '/admin',
		failureRedirect: '/admin/login',
		failureFlash : true  
	}));	

	// logout
	app.get('/admin/logout', controller.logout);
}