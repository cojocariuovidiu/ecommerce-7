// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('categoria',{
	ordem: Number,
	status: {
		type: Number,
		default: 1 // 0 => Inativo, 1 => Ativo
	}, 
	nome: String,
	descricao: String
});