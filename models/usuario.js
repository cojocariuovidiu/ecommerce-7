// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('usuarios',{
	tipo: {
		type: Number, 
		default: 1 // 0 => ADMIN  | 1 => CLIENTE
	},
	nome: String,
	email: String,
	senha: String,
	telefone: Number,
	celular: Number
});