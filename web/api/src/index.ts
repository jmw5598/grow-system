import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

createConnection().then(async connection => {
  const application: Application = Application.getInstance();
  application.start();
});
