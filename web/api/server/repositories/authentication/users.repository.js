'use strict';

const { User, Role } = require('../../models');

class UsersRepository {

  constructor() {}

  exists(username) {
    return User.count({ where: { username: username } })
      .then(count => count > 0);
  }

  save(user) {
    return User.build(user).save();
  }

  findAll() {
    return User.findAll({
      include: [{
        model: Role,
        as: 'roles',
        attributes: ['role'],
        through: { attributes: [] }
      }]
    });
  }

  findById(id) {
    return User.findByPk(id, {
      include: [{
        model: Role,
        as: 'roles',
        attributes: ['role'],
        through: { attributes: [] }
      }]
    });
  }

  findOne(username) {
    return User.findOne({
      where: { username: username },
      include: [{
        model: Role, as: 'roles', attributes: ['role'],
        through: { attributes: [] }
      }]
    });
  }

  delete(id) {
    return User.destroy({ where: { id: id } })
      .then(res => res === 1);
  }

}

module.exports = new UsersRepository();
