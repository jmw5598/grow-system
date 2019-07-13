'use strict';

const bcrypt = require('bcrypt');
const { Logger } = require('../../utilities');
const { UsersRepository } = require('../../repositories');
const { JwtService } = require('../../services');

class JwtController {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  authenticate(req, res) {
    this.logger.debug(`Authenticating user ${req.body.username}`);
    const username = req.body.username;
    const password = req.body.password;

    let user = UsersRepository.findOne(username);

    let valid = user.then((user) => {
      if (user)
        return bcrypt.compare(password, user.dataValues.password);
      else
        throw err;
    });

    return Promise.all([user, valid])
      .then(([user, valid]) => {
        if(valid) {
          let payload = { user: user.dataValues.username, roles: user.dataValues.roles };
          return res.status(200).send({ token: JwtService.sign(payload) });
        } else {
          throw err;
        }
      })
      .catch((error) => res.status(401).send('Invalid username/password'));
  }

}

module.exports = new JwtController();
