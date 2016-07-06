module.exports = function (passport) {   

	var express = require('express');
	var router = express.Router();   

	var Usuario = require('./models/usuario');
	var LocalStrategy   = require('passport-local').Strategy;

    // passport login
    passport.use('login', new LocalStrategy({
    		passReqToCallback : true
    	},
        function(req, username, password, done) { 

            // verifica se tem usuario cadastrado
            Usuario.findOne({ 'email' :  username, 'senha' : password }, 
                function(err, user) {
                    if (err)
                        return done(err);

                    if (!user){
                        return done(null, false, req.flash('error', 'Dados inválidos.'));                 
                    }

                    // successo
                    return done(null, user);
                }
            );
        }
    ));

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id, function(err, user) {
            done(err, user);
        });
    });
	
	return router;
}