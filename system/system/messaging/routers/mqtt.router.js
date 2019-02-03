'use strict';

const Rx = require('rxjs');
const SystemContext = require('../../system.context'); // May not use this.
const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');

class MqttRouter {

  constructor() {
    this.init();
    this.systemRouterSource = new Rx.Subject();
    this.systemRouter = this.systemRouterSource.asObservable();
    this.systemNodeRouterSource = new Rx.Subject();
    this.systemNodeRouter = this.systemNodeRouterSource.asObservable();
  }

  init() {
    MqttGateway.inbound
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    let [event] = payload.topic.split('/');
    let routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    let message = new MqttMessage(routedTopic, payload.message);
    switch(event) {
      case 'system':
        this.systemRouterSource.next(message);
        break;
      case 'node':
        this.systemNodeRouterSource.next(message);
        break;
      default:
        break;
    }
  }

}

module.exports = new MqttRouter();


/*
  WEB API
  *LISTEN TOPICS
    - system/health -> gets current status health of system.
    - node/health -> gets current state of node (result of node/status)
    - node/state -> gets result of node/event.

  SYSTEM
  * LISTEN TOPICS
    - system/status  -> sends back overall health status of system [from api]
    - system/nodes -> sends back a list of connected nodes [from api]
    - node/event -> gets routed to node router [from api]
    - node/status -> gets routed to appriate node based on id (published to node/status/{id}) from [api]
    - node/event -> gets routed to appropriate node based on id (published to node/event/{id}) from [api]
    - <topic> -> receives health from node and passed back to api.
    - <topic> -> receives event value and passed back to api
  * PUBLISH TOPICS
    - system/healt -> sends system health back to api.
    - node/health -> send node health back to api.
    - node/state -> send result of event back to api.
    - node/event/{id} - routes event to appropriate node.

  NODE
  * LISTEN TOPICS
    - node/event/{id} -> receives event requests from system
    - node/health/{id} -> receives health requests from system.
  * PUBLISH TOPICS
    -



*/
