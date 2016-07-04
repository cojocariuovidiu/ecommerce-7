module.exports = function (passport) {   

	var express = require('express');
	var router = express.Router();   

	var Usuario = require('../models/usuario');
	var LocalStrategy   = require('passport-local').Strategy;

	/* GET login */
	router.get('/', function(req, res, next) {
		// views/admin/admin.html
		res.render('admin/login');
	});

	//POST login
	router.post('/', function(req, res, next) {
		passport.authenticate('login', function (err, user, info) {

			var ret = {
				status: ""
			}

			if(user){
				ret.status = true;
			}else{
				ret.status = false;
			}

			return res.json(ret);
			
		})(req, res, next);
	});	

    // passport login
    passport.use('login', new LocalStrategy(
        function(username, password, done) { 

            // verifica se tem usuario cadastrado
            Usuario.findOne({ 'email' :  username, 'senha' : password }, 
                function(err, user) {
                    if (err)
                        return done(err);

                    if (!user){
                        return done(null, false);                 
                    }

                    // successo
                    return done(null, user);
                }
            );
        }
    ));
	
	return router;
}