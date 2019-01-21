'use strict';

const SystemContext = require('../../system.context');

class SystemNodeEventRouter {

  constructor() {
    /*
      TODO:
      Create Observable streams (simulates channels in Spring) to notify
      message services to perform their operations on the message.  Some
      message types will require multiple services. An example is a notificaion
      where the notification should be persisted to a database, sent to the,
      client and sent via SMS to phone.  The services will sub to the channels
      that they want to get messages from.
    */
  }

  route(topic, message) {

    let [ event, subevent ] = topic.substring(topic.indexOf('/') + 1).split('/');

    console.log('SystemNodeEventRouter::Route');
    console.log('SystemNodeEventRouter::Topic' + topic);
    console.log('SystemNodeEventRouter::Event::' + event);
    console.log('SystemNodeEventRouter::Subevent::' + subevent);

    switch(event) {
      case 'register':
        SystemContext.registerNode(message);
        console.log('SystemNodeEventRouter::Router::Registered new node');
        break;
      case 'status':
        console.log('Sending MQTT message to get node status');
        break;
      case 'event':
        console.log('Sending MQTT message to perform node event');
        break;
    }

  }

}

module.exports = new SystemNodeEventRouter();
