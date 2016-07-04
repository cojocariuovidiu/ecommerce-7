// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('usuario',{
  nome: String,
  email: String,
  senha: String,
});