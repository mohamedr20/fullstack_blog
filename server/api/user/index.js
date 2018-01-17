'use strict';

const router = require('express').Router();
const controller = require('./user.controller');
// let auth  = require('')

router.get('/',(req,res)=>{
    res.status(200).json({message:'User found'})
});

module.exports = router;