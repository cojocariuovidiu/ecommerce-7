// var fs       = require("fs");
// var path     = require("path");
// var db       = {};

// percorre o diretorio para carregar cada model
// fs
//   .readdirSync(__dirname)

//   .filter(function(file) {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })

//   .forEach(function(file) {
//     var model = require(__dirname +"/"+file)
//     db[model.name] = model;
//   });

//   module.exports = db;


// bd
// var mongoose = require('mongoose');

// module.exports = function(){

// 	var usuario = mongoose.model('usuarios',{
// 		tipo: {
// 			type: Number, 
// 			default: 1 // 0 => ADMIN  | 1 => CLIENTE
// 		},
// 		nome: String,
// 		email: String,
// 		senha: String,
// 		telefone: Number,
// 		celular: Number
// 	});

// 	return usuario;
// }

// percorre o diretorio para carregar cada api
// fs
//   .readdirSync(__dirname)

//   .filter(function(file) {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })

//   .forEach(function(file) {
//     require(__dirname +"/"+file);
//   });
