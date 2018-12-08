'use strict';

const express = require('express');
const ApiRouter = express.Router();

const V1Router = require('./v1');

ApiRouter.use('/v1', V1Router);

module.exports = ApiRouter;
