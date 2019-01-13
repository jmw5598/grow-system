'use strict';

class SystemEventRouter {

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

    console.log("SystemEventRouter::Route");
    console.log("SystemEventRouter::Topic::" + topic);
    console.log("SystemEventRouter::Event::" + event);
    console.log("SystemEventRouter::Subevent::" + subevent);

    switch(event) {
      default:
        break;
    }

  }

}

module.exports = new SystemEventRouter();
