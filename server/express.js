'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const helmet  = require('helmet');
let User_routes = require('./api/user/index');
let Article_routes = require('./api/article/index');
module.exports = function(app){
    app.use(helmet())
    app.use(cors());
    app.use(express.static(path.join(__dirname,'public')));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/api/users',User_routes);
    app.use('/api/article',Article_routes);
}


