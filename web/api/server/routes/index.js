'use strict';

const express = require('express');
const Router = express.Router();

const ApiRouter = require('./api');

Router.use('/api', ApiRouter);

module.exports = Router;
