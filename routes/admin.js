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
  res.render('admin/admin');
});

module.exports = router;