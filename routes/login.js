var fs = require('fs');
var hbs =   require('hbs');
var express = require('express');
var router = express.Router();

module.exports = function(passport){

	/* GET login */
	router.get('/', function(req, res, next) {
		
		// views/admin/admin.html
		res.render('admin/login');
	});

	// POST login
	// router.post('/login', passport.authenticate('login', {
	// 	successRedirect: '/admin',
	// 	failureRedirect: '/login',
	// }));

}