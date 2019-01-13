'use strict';

const Rx = require('rxjs');

class SystemContext {

  /*
    TODO:
    - Have Observables for system config and system nodes.  Allow services that
      need these values to subscribe and get updates when they change.
    - Maybe write out last state of nodes to file, on reboot reload save file
      of nodes?
    -
  */

  constructor() {
    this.nodesData = [];
    this.nodeSource = new Rx.Subject(this.nodesData);
    this.nodes = this.nodeSource.asObservable();
  }

  init(config) {
    this.config = config;
  }

  registerNode(node) {
    let temp = this.nodesData.slice();
    temp.push(node);
    this.nodesData = temp;
    this.nodeSource.next(this.nodesData);
    console.log("SystemNodeContext::Register::AddNode");
  }

}

module.exports = new SystemContext();
