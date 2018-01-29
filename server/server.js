const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config.js');
mongoose.Promise = global.Promise;
const http = require('http');
const path = require('path');
const express_config = require('./express');
var app = express();
var server = http.createServer(app);

mongoose.connect(config.db_uri,{
    useMongoClient:true,
})
.then(()=>console.log(`Connected to MongoDB`))
.catch((err)=>err);

mongoose.connection.on('error',function(err){
    console.log(`MongoDB connection Error: ${err}`)
    process.exit(-1)
})

express_config(app);
function startServer() {
    server.listen(config.port, config.ip, function() {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
  }
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
setImmediate(startServer);
exports = module.exports = app