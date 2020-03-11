import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { GlobalConfiguration } from '@grow/common';
import { createConnection } from 'typeorm';
import { Application } from './app';

dotenv.config();

const filePath: string = path.resolve(__dirname, '../configuration.json');
const config: GlobalConfiguration = JSON.parse(fs.readFileSync(filePath, 'utf8')) as GlobalConfiguration;

createConnection().then(async connection => {
  const application: Application = new Application(config);
  application.start();
});
