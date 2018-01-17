'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(cors());
    app.use(express.static(path.join(__dirname,'public')));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());
}


