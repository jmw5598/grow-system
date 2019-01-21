'use strict';

class SystemMessageRouter {

  constructor() {}

  route(topic, message) {

    let [event, subevent] = topic.substring(topic.indexOf('/') + 1).split('/');

    console.log("SystemMessageRouter::Route");
    console.log("SystemMessageRouter::Topic" + topic);
    console.log("SystemMessageRouter::Event" + event);
    console.log("SystemMessageRouter::Subevent" + subevent);

    switch(event) {
      default:
        break;
    }

  }

}
