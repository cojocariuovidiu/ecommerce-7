var express = require('express');
var router = express.Router();     

module.exports = function (passport) {   

	/* GET login */
	router.get('/', function(req, res, next) {
		
		console.log( req.flash('message') );

		// views/admin/admin.html
		res.render('admin/login', { message: req.flash('message')} );
	});

	//POST login
	router.post('/', passport.authenticate('login', {
		successRedirect: '/admin',
		failureRedirect: '/login',
		failureFlash : true
	}));
	
	return router;
}