'use strict';

const express = require('express');
const SystemsRouter = express.Router();

SystemsRouter.route('/')
  .get((req, res) => res.status(200).send({ message: 'List of systems' }));

module.exports = SystemsRouter;
