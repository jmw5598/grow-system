'use strict';

const { Logger } = require('../../utilities');
const { MqttGateway } = require('../../messaging');
const { MqttMessage } = require('../../messaging/models');

class TemperatureHumidityController {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  command(req, res) {
    this.logger.debug(`Executing new temphum command`);
    const message = this._generateCommandMessage(
      req.params.nodeId,
      req.params.sensorId,
      req.body.command,
      req.body.payload
    );
    MqttGateway.outbound(message);
    return res.status(200).send({ status: 'Ok', message: message });
  }

  _generateCommandMessage(node, sensor, command, payload) {
    const topic = 'system/node/command/temphum';
    return new MqttMessage(topic, {
      command: command,
      node: { id: node },
      component: { id: sensor },
      payload: payload
    });
  }

}

module.exports = new TemperatureHumidityController();
