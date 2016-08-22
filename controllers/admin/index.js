module.exports = function(app){

	var controller = {};
	
	controller.index = function(req, res, next) {
		res.render('admin/index');
	};	
	controller.login = function(req, res, next) {
		res.render('admin/login', { erro: req.flash('erro') });
	};
	controller.logout = function(req, res){
		req.logout();
		res.redirect('/admin/login');
	}

	return controller;
}