// module.exports = function(router, isAuthenticated){

// 	var Usuario = require('../../models/usuario');

// 	// Variaveis de retorno
// 	var erro = { resp: false, msg: '' }
// 	var sucesso = { resp: true, msg: '' }

// 	/* APIs */

// 	//GET todos usuários Admin
// 	router.get('/usuarios', function(req, res, next) {

// 		// Usuarios amdin => tipo: 0
// 		Usuario.find( {'tipo': 0}, function(err, docs){
// 			res.json(docs);
// 		});
// 	});

// 	//POST salva novo usuario
// 	router.post('/adiciona-usuario', isAuthenticated, function(req, res, next){
// 		// Usuario
// 		var usuario = req.body;

// 		// Nao salva usuario com email repetido
// 		Usuario.find( {'email': usuario.email}, function(err, docs){
// 			// Ja existe usuario
// 			if( docs.length > 0 ){
// 				erro.msg = "Esse e-mail já está sendo usado";
// 				res.json(erro);
// 			}else{
// 				// Cadastra usuario admin
// 				usuario.tipo = 0;

// 				Usuario.create(usuario, function(err, attr){
// 					if(! err ){
// 						sucesso.msg = "Usuário cadastrado com sucesso";
// 						res.json(sucesso);
// 					}else{
// 						erro.erro = err;
// 						res.json(err);
// 					}
// 				});
// 			}
// 		});
// 	});

// 	//POST atualiza dados usuario
// 	router.post('/edita-usuario', isAuthenticated, function(req, res, next){
// 		// Usuario
// 		var usuario = req.body;

// 		// Nao salva usuario com email repetido
// 		Usuario.findOneAndUpdate( {'email': usuario.email}, {$set: usuario},function(err, docs){
// 			// Ja existe usuario
// 			if(! err ) {
// 				sucesso.msg = "Usuário atualizado com sucesso";
// 				res.json(sucesso);
// 			}else{
// 				erro.erro = err;
// 				res.json(erro);
// 			}
// 		});
// 	});

// 	//POST remove usuario
// 	router.post('/remove-usuario', isAuthenticated, function(req, res, next){
// 		// Usuario
// 		var usuario = req.body;

// 		Usuario.remove( {email: usuario.email}, function(err, docs){
// 			if(! err){
// 				res.json(sucesso);
// 			}else{
// 				erro.erro = err;
// 				res.json(erro);
// 			}
// 		});
// 	});

// 	return router;
// }



