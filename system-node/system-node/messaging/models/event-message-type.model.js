'use strict';

const _types = this._types = {
    NODE_STATE: 'NODE_STATE',
    RELAY_STATE: 'RELAY_STATE',
    TEMPHUM_STATE: 'TEMPHUM_STATE'
  };

class EventMessageType {
  static get NODE_STATE() { return _types.NODE_STATE; }
  static get RELAY_STATE() { return _types.RELAY_STATE; }
  static get TEMPHUM_STATE() { return _types.TEMPHUM_STATE; }
}

module.exports = EventMessageType;