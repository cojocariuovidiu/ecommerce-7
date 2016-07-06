var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

module.exports = function(isAuthenticated, passport){

	//GET home ADMIN
	router.get('/', isAuthenticated, function(req, res) {

		// views/admin/admin.html
		res.render('admin/admin', { usuario: req.user });
	});

	//GET login
	router.get('/login', function(req, res, next) {

		// views/admin/admin.html
		res.render('admin/login', { error: req.flash('error')});
	});

	//POST login
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/admin',
		failureRedirect: '/admin/login',
		failureFlash : true  
	}));	

	// LOGOUT
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/admin/login');
	});

	return router;
}