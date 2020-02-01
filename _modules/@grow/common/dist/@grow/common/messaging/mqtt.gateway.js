"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = require("mqtt");
const rxjs_1 = require("rxjs");
const logger_service_1 = require("../utilities/logger.service");
const mqtt_message_model_1 = require("../messaging/models/mqtt-message.model");
class MqttGateway {
    constructor() {
        this._config = {};
        this._logger = new logger_service_1.Logger(this.constructor.name);
        this.routes = {};
        this.routes.inbound = { source: new rxjs_1.Subject() };
        this.routes.inbound.channel = this.routes.inbound.source.asObservable();
    }
    static getInstance() {
        if (!MqttGateway.instance) {
            MqttGateway.instance = new MqttGateway();
        }
        return MqttGateway.instance;
    }
    setup(config) {
        this._config = config;
        this._client = mqtt_1.connect(this._config.gateway.uri);
        if (this._client) {
            this._client.on('connect', () => this._subscriptions(this._config.topics.subscriptions));
            this._client.on('message', (topic, message) => this.inbound(topic, JSON.parse(message.toString())));
        }
    }
    inbound(topic, message) {
        this._logger.debug(`[MqttGateway] New inbound message: ${topic}`);
        let routedTopic = topic.split("/");
        routedTopic.splice(1, 1);
        const payload = new mqtt_message_model_1.MqttMessage(routedTopic.join('/'), message);
        this.routes.inbound.source.next(payload);
    }
    outbound(message) {
        this._logger.debug(`New outbound message: ${message.topic}`);
        const payload = JSON.stringify(message.message);
        if (this._client) {
            this._client.publish(message.topic, payload);
        }
    }
    _subscriptions(subscriptions) {
        if (this._client) {
            this._client.subscribe(subscriptions, Object.assign({}, this._config.options));
        }
    }
}
exports.MqttGateway = MqttGateway;
