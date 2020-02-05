import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const application: Application = Application.getInstance();
application.start();
