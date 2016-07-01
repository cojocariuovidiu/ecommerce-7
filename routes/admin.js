var fs = require('fs');
var hbs =   require('hbs');
var express = require('express');
var router = express.Router();
var models = require('../models/collections');

/* GET Admin */
router.get('/', function(req, res, next) {


	models.find({}, function(err, docs) {
		
		console.log(docs);
		
	});
	
	// views/admin/admin.html
	res.render('admin/admin');
});

module.exports = router;