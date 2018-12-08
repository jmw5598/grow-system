const fs = require('fs');
const server = require('./web');
const config = JSON.parse(fs.readFileSync('config/server.json', 'utf8'));

console.log(config);

server.setup(config.development);
server.start();
