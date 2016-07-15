var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

module.exports = function(isAuthenticated, passport){

	//GET home ADMIN
	router.get('/', isAuthenticated, function(req, res) {

		// views/admin/index.html
		res.render('admin/index', { usuario: req.user });
	});

	//GET login
	router.get('/login', function(req, res, next) {

		// views/admin/admin.html
		res.render('admin/login', { erro: req.flash('erro')});
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