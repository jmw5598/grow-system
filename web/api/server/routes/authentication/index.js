'use strict';

const express = require('express');
const AuthenticationRouter = express.Router();

const JwtRouter = require('./jwt.router');
const UsersRouter = require('./users.router');

AuthenticationRouter.use('/tokens', JwtRouter);
AuthenticationRouter.use('/users', UsersRouter);

module.exports = AuthenticationRouter;
