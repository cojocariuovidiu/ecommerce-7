var express = require('express');
var router = express.Router();

module.exports = function(isAuthenticated){

	/* APIs */
	router.get('/user', function(req, res, next) {

		res.json("")	;

		// var db = req.db;
		// var collection = db.get('usuario');

	 //    collection.find({},{},function(e,docs){

	 //    	// imprimi o conteudo do banco
	 //    	// console.log(docs);

	 //    	res.json({
	 //    		"user" : docs
	 //    	});
	 //    });
	});

	return router;
}