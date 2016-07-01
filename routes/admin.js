var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

module.exports = function(isAuthenticated){

	/* GET Admin */
	router.get('/', isAuthenticated, function(req, res) {
		
		// views/admin/admin.html
		res.render('admin/admin');
	});

	return router;
}
// module.exports = router;