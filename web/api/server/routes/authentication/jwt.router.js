'use strict';

const express = require('express');
const JwtRouter = express.Router();

const { JwtController } = require('../../controllers');

JwtRouter.route('/')
  .post((req, res) => JwtController.authenticate(req, res));

module.exports = JwtRouter;
