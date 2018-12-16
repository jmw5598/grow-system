'use strict';

const { UsersRepository } = require('../../repositories');

class UsersController {

  constructor() {}

  save(req, res) {
    let user = req.body;
    return UsersRepository.save(user)
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

  exists(req, res) {
    let username = req.body.username;
    return UsersRepository.exists(username)
      .then(exists => {
        if(exists) return res.status(200).send();
        else throw error;
      })
      .catch(error => res.status(404).send('Username not found'));
  }

  list(req, res) {
    return UsersRepository.findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  }

  get(req, res) {
    let id = req.params.id;
    return UsersRepository.findById(id)
      .then(user => res.status(200).send(user))
      .catch(error => res.status(404).send(error));
  }

  delete(req, res) {
    let id = req.params.id;
    return UsersRepository.delete(id)
      .then(success => {
        if(success) return res.status(200).send({ message: `Deleted user with id ${id}` })
        else throw error;
      })
      .catch(error => res.status(404).send(`Unable to delete user with id ${id}.`));
  }

}

module.exports = new UsersController();
