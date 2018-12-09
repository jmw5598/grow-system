'use strict';

const express = require('express');
const UsersRouter = express.Router();

UsersRouter.route('/')
  .get((req, res) => res.status(200).send('get users'));

module.exports = UsersRouter;
