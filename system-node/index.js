'use strict';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config/system-node.json', 'utf8'));
const SystemNode = require('./system-node/');

SystemNode.setup(config);
SystemNode.start();
