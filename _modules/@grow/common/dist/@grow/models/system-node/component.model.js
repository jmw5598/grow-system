"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(id, alias, type, pin, state, 
    // @@@ Create preferences class for each kind 
    // @@@ Create type alias for all preferecnes type and tyep that here
    preferences) {
        this.id = id;
        this.alias = alias;
        this.type = type;
        this.pin = pin;
        this.state = state;
        this.preferences = preferences;
    }
}
exports.Component = Component;
