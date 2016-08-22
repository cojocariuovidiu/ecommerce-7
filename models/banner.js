// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('banner',{
	ordem: Number,
	status: {
		type: Number,
		default: 1 // 0 => Inativo, 1 => Ativo
	}, 
	descricao: String, 
	imagem: String
});