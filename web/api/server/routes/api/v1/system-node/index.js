'use strict'

const express = require('express');
const SystemNodeRouter = express.Router();
const RelayRouter = require('./relay.router');

SystemNodeRouter.use('/:nodeId/relay', RelayRouter)

module.exports = SystemNodeRouter;
