// Start server mongo
// sudo chown -R `id -u` /data/db

// create folder data mongo
// mkdir -p /data/db

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');