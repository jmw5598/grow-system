'use strict';

const { Logger } = require('../../utilities');
const { MqttGateway } = require('../../messaging');
const { MqttMessage } = require('../../messaging/models');

class SystemController {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  status(req, res) {
    const message = this._generateMessage();
    MqttGateway.outbound(message);
    res.status(200).send({ status: 'Ok', message: message});
  }

  _generateMessage() {
    return new MqttMessage(`system/system/command/status`, ``);
  }

}

module.exports = new SystemController();