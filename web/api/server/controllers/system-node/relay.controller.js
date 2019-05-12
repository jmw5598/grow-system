'use strict';

const { MqttGateway } = require('../../messaging');
const { MqttMessage } = require('../../messaging/models');

class RelayController {

  constructor() {}

  command(req, res) {
    const message = this._generateCommandMessage(
      req.params.nodeId,
      req.params.relayId,
      req.body.command,
      req.body.payload
    );
    MqttGateway.outbound(message);
    return res.status(200).send({ status: 'Ok', message: message });
  }

  _generateCommandMessage(node, sensor, command, payload) {
    const topic = 'system/node/command/relay';
    return new MqttMessage(topic, {
      command: command,
      node: { id: node },
      component: { id: sensor },
      payload: payload
    });
  }

}

module.exports = new RelayController();
