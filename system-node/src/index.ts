import * as fs from 'fs';
import * as path from 'path';
import { GlobalConfiguration } from '@grow/common';

import { mapIdsToSubscriptions } from './config/map-id-to-subscriptions.utility';
import { SystemNode } from './app';

const filePath: string = path.resolve(__dirname, './config/configuration.json');
const config: GlobalConfiguration = mapIdsToSubscriptions(
  JSON.parse(fs.readFileSync(filePath, 'utf8')) as GlobalConfiguration,
);

const systemNode: SystemNode = new SystemNode(config);
systemNode.start();
