'use strict';

const express = require('express');
const JwtRouter = express.Router();

const { JwtController } = require('../../controllers');

JwtRouter.route('/')
  .post(JwtController.authenticate);

module.exports = JwtRouter;
