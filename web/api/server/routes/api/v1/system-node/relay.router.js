'use strict';

const express = require('express');
const RelayRouter = express.Router({ mergeParams: true });
const { RelayController } = require('../../../../controllers');

RelayRouter
  .route('/:relayId/command')
    .patch((req, res) => RelayController.command(req, res));

module.exports = RelayRouter;
