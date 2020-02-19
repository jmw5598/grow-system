import { GlobalConfiguration } from '@grow/common';

export const mapIdsToSubscriptions: Function = (config: GlobalConfiguration): GlobalConfiguration => {
  config.mqtt.topics.subscriptions = config.mqtt.topics.subscriptions.map(e => {
    let topic: string = e;

    if (e.includes('{id}')) {
      const segments = e.split('{id}');
      topic = `${segments[0]}${config.node.id}${segments[1]}`;
    }

    return topic;
  });

  return config;
};
