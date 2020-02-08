import * as fs from 'fs';
import { GlobalConfiguration } from '@grow/common';
import { System } from './app';

const config: GlobalConfiguration = JSON.parse(
    fs.readFileSync('config/configuraiton.json', 'utf8'));

const system: System = new System(config);
system.start();