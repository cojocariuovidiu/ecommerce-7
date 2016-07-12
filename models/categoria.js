// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('categoria',{
	ordem: int,
	status: {
		type: int,
		default: 1 // 0 => Inativo, 1 => Ativo
	}, 
	nome: String,
	descricao: String
});