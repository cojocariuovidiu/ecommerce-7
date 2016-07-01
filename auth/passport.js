var Usuario = require('../models/usuario');
var LocalStrategy   = require('passport-local').Strategy;

module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });

    // passport login
    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, email, senha, done) { 
        // check in mongo if a user with username exists or not
        Usuario.findOne({ 'email' :  email, 'senha' : senha }, 
            function(err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log the error and redirect back
                if (!user){
                    console.log('User Not Found with username '+username);
                    return done(null, false, req.flash('message', 'User Not found.'));                 
                }
                // User and password both match, return user from done method
                // which will be treated like success
                return done(null, user);
            }
        );

    }));
}