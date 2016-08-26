// module.exports = function(app){

// 	var Usuario = require('./models/usuario');

// 	var controller = {};
	
// 	controller.getUsuarios = function(req, res, next) {

// 		// Usuarios amdin => tipo: 0
// 		Usuario.find( {'tipo': 0}, function(err, docs){
// 			res.json(docs);
// 		});
// 	};	

// 	return controller;
// }