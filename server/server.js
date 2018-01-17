const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config.js');
mongoose.Promise = global.Promise;
const http = require('http');
const path = require('path');
const express_config = require('./express');
var app = express();
var server = http.createServer(app);
let routes = require('./api/user/index');

mongoose.connect(config.db_uri,{
    useMongoClient:true,
})
.then(()=>console.log('Connected to mongoDB'))
.catch((err)=>console.error(err));
mongoose.connection.on('error',function(err){
    console.log(`MongoDB connection Error: ${err}`)
    process.exit(-1)
})

app.use('/api/users',routes);
// app.use('/api/thing','./api/thing/index');

// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
express_config(app);

  
//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });


function startServer(){
    server.listen(config.port,function(){
        console.log(`Listening on port ${config.port} `+app.get('env'))
    })
}
setImmediate(startServer);
module.exports = app;