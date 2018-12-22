'use strict';

class System {

  constructor() {
    console.log('System::constructor');
  }

  setup(config) {
    console.log('System::initialization and setup process')
    console.log('System::config file');
    console.log(config);
  }

  start() {
    console.log('System::starting system');
  }

}

module.exports = new System();
