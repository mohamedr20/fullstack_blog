'use strict';

const router = require('express').Router();
const User = require('./user.model');
const controller = require('./user.controller');
const bcrypt = require('bcrypt')
// let auth  = require('')


router.post('/register',(req,res,next)=>{
    let newUser = new User({
        username:req.body.username,
        email:req.body.email,
        image_url:req.body.image_url,
        password:req.body.password,
        bio:req.body.bio
    })
    User.addUser(newUser, (err, user) => {
        console.log(newUser)
        if(err) {
          res.json({success: false, msg: 'Failed to register user'});
        } else {
          res.json({success: true, msg: 'User registered'});
        }
      });
});

module.exports = router;