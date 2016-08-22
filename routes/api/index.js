// var express = require('express');
// var router  = express.Router();
// var fs      = require("fs");
// var path    = require("path");

// module.exports = function(isAuthenticated){

// 	// percorre o diretorio para carregar cada api
// 	fs.readdirSync(__dirname)
		
// 		.filter(function(file) {
// 			return (file.indexOf(".") !== 0) && (file !== "index.js");
// 		})
		
// 		.forEach(function(file) {
// 			require(__dirname +"/"+file)( router, isAuthenticated);
// 		});

// 	return router;
// }