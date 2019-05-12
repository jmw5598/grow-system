'use strict';

const express = require('express');
const SystemRouter = express.Router();
const SystemNodeRouter = require('./system-node');

SystemRouter.route('/')
  .get((req, res) => res.status(200).send({ message: 'List of systems' }));

SystemRouter.use('/node', SystemNodeRouter);

module.exports = SystemRouter;
