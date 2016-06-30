var fs = require('fs');
var hbs =   require('hbs');
var express = require('express');
var router = express.Router();

/* GET Admin */
router.get('/', function(req, res, next) {
	
	// views/admin/admin.html
	res.render('admin/admin');
});

module.exports = router;