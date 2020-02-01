import * as fs from 'fs' ;
import { GlobalConfiguration } from '@grow/common';

import { SystemNode } from './system-node';

const config: GlobalConfiguration = mapSystemNodeIdToSubscriptions(JSON.parse(
    fs.readFileSync('config/system-node.json', 'utf8')) as GlobalConfiguration);

const systemNode: SystemNode = new SystemNode(config);

systemNode.start();


function mapSystemNodeIdToSubscriptions(config: GlobalConfiguration) {
  config.system.mqtt.topics.subscriptions = config.system.mqtt.topics.subscriptions
    .map(e => {
      let topic: string = e;

      if(e.includes('{id}')) {
        let segments = e.split('{id}');
        topic = `${segments[0]}${config.node.id}${segments[1]}`
      }

      return topic;
    });
  
  return config;
}