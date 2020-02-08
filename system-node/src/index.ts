import * as fs from 'fs' ;
import { GlobalConfiguration } from '@grow/common';

import { mapIdsToSubscriptions } from './config/map-id-to-subscriptions.utility';
import { SystemNode } from './system-node';

const config: GlobalConfiguration = mapIdsToSubscriptions(JSON.parse(
    fs.readFileSync('config/system-node.json', 'utf8')) as GlobalConfiguration);

const systemNode: SystemNode = new SystemNode(config);
systemNode.start();
