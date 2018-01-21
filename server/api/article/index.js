'use strict';

const router = require('express').Router();
const Article = require('./article.model');
const controller = require('./article.controller');

// router.get('/',controller.create);
router.post('/',controller.create);
router.get('/',controller.findAll);

//Get a feed of followed articles;

// router.get('/feed')
router.get('/:id',controller.findOne);

router.get('/:id',controller.delete);
module.exports = router;