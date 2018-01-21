'use strict';

const router = require('express').Router();
const User = require('./user.model');
const controller = require('./user.controller');
const bcrypt = require('bcrypt')
// let auth  = require('')

router.get('/',controller.findAll);
router.get('/sample',function(req,res){
  res.send('WHY IS IT NOT WORKING')
})
router.get('/:id',controller.getSingleUser);
router.post('/',controller.create);
router.post('/authenticate',controller.authenticate);
router.delete('/:id',controller.delete);



module.exports = router;