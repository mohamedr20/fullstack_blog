'use strict';

const router = require('express').Router();
const Article = require('./article.model');
const controller = require('./article.controller');

// router.get('/',controller.create);
router.get('/',controller.findAll);
router.get('/:id',controller.findOne);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
module.exports = router;