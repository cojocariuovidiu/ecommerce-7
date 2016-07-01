// bd
var mongoose = require('mongoose');

module.exports = mongoose.model('usuarios',{
  nome: String,
  email: String,
  senha: String,
});