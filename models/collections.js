var mongoose = require('mongoose');

module.exports = mongoose.model('usuario',{
	id: String,
	nome: String,
	email: String,
	senha: String,
});