'use strict';

const Rx = require('rxjs');

class SystemNodeContext {

  constructor() {

    this.configurationData = {};
    this.relaysData = [];
    this.sensorsData = {
      temperature: [], humidity: [], temperaturehumidity: [], proximity: []
    }

    this.configurationSource = new Rx.BehaviorSubject({});
    this.configuration = this.configurationSource.asObservable();
    this.relaysSource = new Rx.BehaviorSubject([]);
    this.relays = this.relaysSource.asObservable();
    this.sensorsSource = new Rx.BehaviorSubject({});
    this.sensors = this.sensorsSource.asObservable();

  }

  setConfiguration(configuration) {
    this.configurationData = config;
    this.configurationSource.next(this.configurationData);
  }

  register(component) {
    switch(component.type) {
      case "temperature":
        this.sensorsData.temperature.push(component);
        this.sensorsSource.next(this.relays);
        break;
      case "humidity":
        this.sensorsData.humidity.push(component);
        this.sensorsSource.next(this.sensors);
        break;
      case "temperature/humidity":
        this.sensorsData.temperaturehumidity.push(component);
        this.sensorsSource.next(this.sensors);
        break;
      case "relay":
        this.relaysData.push(component);
        this.relaysSource.next(this.relays);
        break;
      default:
        console.log("ERROR: component type not recognized", component);
        break;
    }
  }

}

module.exports = new SystemNodeContext();
