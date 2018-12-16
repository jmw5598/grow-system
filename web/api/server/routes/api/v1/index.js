'use strict';

const express = require('express');
const V1Router = express.Router();

const SystemsRouter = require('./systems.router');

V1Router.use('/systems', SystemsRouter);

module.exports = V1Router;
