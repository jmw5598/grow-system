'use strict';

const express = require('express');
const RelayRouter = express.Router({ mergeParams: true });
const { RelayController } = require('../../../../controllers');

RelayRouter.route('/:relayId')
  .patch(RelayController.toggle);

module.exports = RelayRouter;
