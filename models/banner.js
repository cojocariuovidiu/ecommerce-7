// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('banner',{
	ordem: int,
	status: {
		type: int,
		default: 1 // 0 => Inativo, 1 => Ativo
	}, 
	descricao: String, 
	imagem: String
});