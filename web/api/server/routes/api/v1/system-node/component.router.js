'using strict';

const express = require('express');
const ComponentRouter = express.Router({ mergeParams: true });
const ComponentController = require('../../../../controllers');

ComponentRouter
    .route('/components')
        .post((req, res) => ComponentController.create(req,res))
        .put((req, res) => ComponentController.update(req, res))
        .delete((req, res) => ComponentController.delete(req, res));

module.exports = ComponentController;