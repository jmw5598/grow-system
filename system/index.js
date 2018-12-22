'use strict';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config/system.json', 'utf8'));
const System = require('./system');

System.setup(config);
System.start();
