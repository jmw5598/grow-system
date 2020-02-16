import * as fs from 'fs';
import * as path from 'path';
import { GlobalConfiguration } from '@grow/common';
import { System } from './app';

const filePath: string = path.resolve(__dirname, '../configuration.json');
const config: GlobalConfiguration = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const system: System = new System(config);
system.start();
