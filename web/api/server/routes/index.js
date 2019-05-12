'use strict';

const express = require('express');
const Router = express.Router();

const ApiRouter = require('./api');
const AuthenticationRouter = require('./authentication');
const { JwtMiddleware } = require('../middleware');

Router.use('/api', ApiRouter);
Router.use('/auth', AuthenticationRouter);

module.exports = Router;
