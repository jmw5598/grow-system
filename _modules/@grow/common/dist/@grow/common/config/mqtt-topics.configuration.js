"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MqttTopicsConfiguration {
    constructor(subscriptions, publishings) {
        this.subscriptions = subscriptions;
        this.publishings = publishings;
    }
}
exports.MqttTopicsConfiguration = MqttTopicsConfiguration;
