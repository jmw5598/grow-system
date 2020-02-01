'use strict';

const express = require('express');
const SystemController = require('../../../controllers').SystemController;
const SystemRouter = express.Router();
const SystemNodeRouter = require('./system-node');

SystemRouter.route('/')
  .get((req, res) => res.status(200).send({ message: 'List of systems' }));

SystemRouter.route('/status')
  .get((req, res) => SystemController.status(req, res));

SystemRouter.use('/node', SystemNodeRouter);

module.exports = SystemRouter;
