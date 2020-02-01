//'use strict';

//const fs = require('fs');
//const config = JSON.parse(fs.readFileSync('config/system-scheduler.json', 'utf8'));
//const SystemScheduler = require('./system-scheduler/');

//SystemScheduler.setup(config);
//SystemScheduler.start();

const { MqttMessage } = require('@grow/common');

const message = new MqttMessage("Test", "test");

console.log(message);