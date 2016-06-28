var fs = require('fs');
var hbs =   require('hbs');
var express = require('express');
var router = express.Router();

var partialsDir = __dirname.replace("routes", "") + '/views/admin/partials';
var filenames = fs.readdirSync(partialsDir);

// Registra todas Partials html
filenames.forEach(function (filename) {
  var matches = /^([^.]+).html/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

/* GET Admin */
router.get('/', function(req, res, next) {
	
	// views/admin/admin.html
	res.render('admin/admin');
});

router.get('/api/user', function(req, res, next) {

	var db = req.db;
	var collection = db.get('usercollection');

    collection.find({},{},function(e,docs){

    	// imprimi o conteudo do banco
    	// console.log(docs);

    	res.json({
    		"user" : docs
    	});
    });
});


module.exports = router;