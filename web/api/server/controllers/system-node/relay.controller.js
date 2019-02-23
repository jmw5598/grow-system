'use strict';

const { MqttGateway } = require('../../messaging');
const { MqttMessage } = require('../../messaging/models');

class RelayController {

  constructor() {}

  toggle(req, res) {
    const topic = 'system-node/action/relay';
    const message = {
      node: { id: req.params.nodeId },
      component: { id: req.params.relayId, state: req.body.state }
    };
    const payload = new MqttMessage(topic, message);
    MqttGateway.outbound(payload);
    return res.status(200).send("OK");
  }

}

module.exports = new RelayController();
