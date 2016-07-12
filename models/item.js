// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('item',{
	nome: String, 
	descricao: String, 
	codigo: String, 
	preco_de: Number, 
	preco_por: Number,
	imagem_principal: String,
	imagem_detalhe_1: String,
	imagem_detalhe_2: String,
	imagem_detalhe_3: String
});