"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const mqtt_message_model_1 = require("./models/mqtt-message.model");
class MessageRouter {
    constructor() {
        this.routes = {};
    }
    setup(routes) {
        routes.forEach(r => {
            this.routes[r.channel] = { source: new rxjs_1.Subject() };
            this.routes[r.channel].channel = this.routes[r.channel].source.asObservable();
        });
    }
    route(message) {
        const keys = Object.keys(this.routes);
        const [segment] = message.topic.split('/');
        if (keys.includes(segment)) {
            const routedTopic = message.topic.split('/').slice(1).join('/');
            const outbound = new mqtt_message_model_1.MqttMessage(routedTopic, message.message);
            this.routes[segment].source.next(outbound);
        }
    }
}
exports.MessageRouter = MessageRouter;
