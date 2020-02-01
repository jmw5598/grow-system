"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MqttConfiguration {
    constructor(gateway, options, topics) {
        this.gateway = gateway;
        this.options = options;
        this.topics = topics;
    }
}
exports.MqttConfiguration = MqttConfiguration;
