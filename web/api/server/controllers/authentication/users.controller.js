'use strict';

const { UserRepository } = require('../../repositories');

class UsersController {

  constructor() {}

  save(req, res) {
    return res.status(201).send('saved');
  }

  exists(req, res) {
    return res.status(200).send();
  }

  list(req, res) {
    return res.status(200).send('list of users');
  }

  get(req, res) {
    return res.status(200).send('user by id');
  }

  delete(req, res) {
    return res.status(200).send('deleted user');
  }

  update(req, res) {
    return res.status(200).send('updated user');
  }

}

module.exports = new UsersController();
