// module.exports = function(passport) {

//   var localStrategy = require('passport-local').Strategy;

//   // passport/login.js
//   passport.use('login', new localStrategy({
//       passReqToCallback : true
//     },
//     function(req, email, senha, done) {

//       // verifica no db se o usuario exite
//       var db = req.db;
//       var User = db.get('usuario');

//       User.findOne({ 'email' :  email, 'senha': senha },
//         function(err, user) {
//           // Em caso de erro, retorne usando o método done
//           if (err)
//             return done(err);
//           // Nome de usuário não existe, logar o erro & redirecione de volta
//           if (!user){
//             console.log('Usuário não encontrado para usuário '+username);
//             return done(null, false,
//                   req.flash('message', 'Usuário não encontrado.'));
//           }
//           // Usuário existe mas a senha está errada, logar o erro
//           // if (!isValidPassword(user, password)){
//           //   console.log('Senha Inválida');
//           //   return done(null, false,
//           //       req.flash('message', 'Senha Inválida'));
//           // }
//           // Tanto usuário e senha estão corretos, retorna usuário através 
//           // do método done, e, agora, será considerado um sucesso
//           return done(null, user);
//         }
//       );
//   }));
// }


// load all the things we need

// load up the user model
//var models  = require('../models');


// expose this function to our app using module.exports


    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    // passport.serializeUser(function(user, done) {
    //     done(null, user );
    // });

    // // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     done(null, { email: id });
    // });
    // Cria uma nova sessao validando a chave gerada no painel em java
    // passport.use('new-session', new LocalStrategy({
    //     usernameField: 'apiHash',
    //     passwordField: 'none',
    //     passReqToCallback : true
    // },
    // function (req, sessionKey, password, done) {
    //     var remoteAddress =       
    //     models.JavaNode.findAll({
    //         where: {
    //             id: sessionKey
    //         }
    //     }).then(function (data) {            
    //         if ( data.length > 0 ) {
    //             var result = data[0].dataValues;
    //             return done(null, result.clicod);
    //         } else {
    //             return done(null, null);
    //         }
    //     });
    // }));

// }