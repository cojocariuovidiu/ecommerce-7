var express = require('express');
var router = express.Router();
var Usuario = require('../../models/usuario');

module.exports = function(isAuthenticated){

	/* APIs */

	//GET todos usuários Admin
	router.get('/usuarios', isAuthenticated, function(req, res, next) {

		// Usuarios amdin => tipo: 0
		Usuario.find( {'tipo': 0}, function(err, docs){
			res.json(docs);
		});
	});

	return router;
}