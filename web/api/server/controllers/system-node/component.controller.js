'using strict';

const { Logger } = require('../../utilities');
const { MqttGateway } = require('../../messaging');
const { MqttMessage } = require('../../messaging/models');

class ComponentController {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  create(req, res) {
    this.logger.debug(`Creating new component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(
      req.params.nodeId, null, 'create', req.body.payload);
    MqttGateway.outbound(message);
    return res.status(200).send({ status: 'Ok', message: message });
  }

  update(req, res) {
    this.logger.debug(`Upading component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(
      req.params.nodeId, req.params.componentId, 'update', req.body.payload);
    MqttGateway.outbound(message);
    return res.status(200).send({ status: 'Ok', message: message });
  }

  delete(req, res) {
    this.logger.debug(`Deleting component on node with id ${req.params.nodeId}`);
    const message = this._generateMessage(
      req.params.nodeId, req.params.componentId, 'delete', null);
    MqttGateway.outbound(message);
    return res.status(200).send({ status: 'Ok', message: message });
  }

  _generateMessage(node, component, command, payload) {
    const topic = `system/node/component/${command}`;
    return new MqttMessage(topic, {
      command: command,
      component: { id: component },
      node: { id: node },
      payload: payload
    });
  }

}

module.exports = new ComponentController();