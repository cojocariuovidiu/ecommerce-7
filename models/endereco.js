// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('endereco',{
	logradouro: String, 
	numero: String, 
	bairro: String, 
	complemento: String, 
	cep: Number,
	cidade: String, 
	estado: String
});