'using strict';

const express = require('express');
const ComponentRouter = express.Router({ mergeParams: true });
const ComponentController = require('../../../../controllers').ComponentController;

ComponentRouter
    .route('/')
        .post((req, res) => ComponentController.create(req,res));

ComponentRouter
    .route('/:componentId')
        .put((req, res) => ComponentController.update(req, res))
        .delete((req, res) => ComponentController.delete(req, res));

module.exports = ComponentRouter;