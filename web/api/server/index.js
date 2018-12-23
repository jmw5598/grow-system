'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');

const router = require('./routes');

const { MqttGateway } = require('./messaging');
const mqttConfig = JSON.parse(fs.readFileSync('config/mqtt.json', 'utf8'));

class Server {

  constructor() {
    this.server = express();
    this.mqttConfig = mqttConfig;
  }

  setup(config) {
    this.server.set('env', config.env);
    this.server.set('hostname', config.hostname);
    this.server.set('port', config.port);

    this.server.set('views', config.viewDir);
    this.server.set('view engine', 'ejs');

    this.server.use(logger(config.env));
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cookieParser());
    this.server.use(express.static(config.staticDir));

    this.server.use('/', router);

    this.server.use((req, res, next) => {
      next(createError(404));
    });

    this.server.use((err, req, res, next) => {
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'dev' ? err : {};
      res.status(err.status || 500);
      res.render('error');
    });

    MqttGateway.init(this.mqttConfig);

  }

  start() {
    let hostname = this.server.get('hostname');
    let port = this.server.get('port');
    this.server.listen(port, () => {
      console.log('Express server listening on - http://' + hostname + ':' + port);
    });
  }

}

module.exports = new Server();
