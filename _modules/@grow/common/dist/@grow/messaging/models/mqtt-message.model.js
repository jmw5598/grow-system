"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MqttMessage {
    constructor(topic, message) {
        this.topic = topic;
        this.message = message;
    }
}
exports.MqttMessage = MqttMessage;
