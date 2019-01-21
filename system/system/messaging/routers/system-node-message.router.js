'use strict';

/*
  This should handle the initial message.  Events should be routed to
  SystemNodeEventRouter to route to services based on event?
  Something to think about.
*/

class SystemNodeMessageRouter {

  constructor() {}

  route(topic, message) {

      let [event] = topic.split('/');
      let routedTopic = topic.substring(topic.indedOf('/') + 1);

      console.log('SystemNodeMessageRouter::Route');
      console.log('SystemNodeMessageRouter::Topic::' + topic);
      console.log('SystemNodeMessageRouter::Event::' + event);
      console.log('SystemNodeMessageRouter::RoutedTopic::' + routedTopic);

  }

}
