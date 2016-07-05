var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

module.exports = function(isAuthenticated){

	/* GET Admin */
	router.get('/', isAuthenticated, function(req, res) {
		
		console.log(req.user);

		// views/admin/admin.html
		res.render('admin/admin', { usuario: req.user });
	});

	return router;
}
// module.exports = router;