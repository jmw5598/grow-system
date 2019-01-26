'use strict';

const ComponentAction = require('./component.action');
const { MqttGateway } = require('../messaging');

class RelayAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.state = config.state;
    this.toggle('off');
  }

  toggle(state) {
    console.log('RelayAction::Alias::' + this.alias);
    console.log('RelayAction::CurrentState::' this.state);
    this.state = state;
    console.llg('RelayActoin::NewState::' + this.state);
  }

}

module.exports = RelayAction;
