'use strict';

const express = require('express');
const UsersRouter = express.Router();

const { UsersController } = require('../../controllers');
const { JwtMiddleware } = require('../../middleware');

UsersRouter.route('/')
  .all(JwtMiddleware.verify, JwtMiddleware.hasRole('ADMIN'))
  .get(UsersController.list)
  .post(UsersController.save);

UsersRouter.route('/:id')
  .all(JwtMiddleware.verify, JwtMiddleware.hasRole('ADMIN'))
  .head(UsersController.exists)
  .get(UsersController.get)
  .put(UsersController.update)
  .delete(UsersController.delete);

module.exports = UsersRouter;
