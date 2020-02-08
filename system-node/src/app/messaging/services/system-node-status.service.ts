import * as os from 'os';
import { Observable } from 'rxjs';
import { ApplicationContext, EventMessage, EventMessageType, IMessageService, MqttGateway, MqttMessage, Logger, SystemDetails } from '@grow/common'
import { SystemNodeMessageRouter } from '../routers/system-node-message.router';
import { ChannelSegments } from 'system-node/application.constants';

const {  } = require('@grow/common');

export class SystemNodeStatusService implements IMessageService {
  private _config: any;
  private _logger: Logger;
  private _interval: any;
  private _applicationContext: ApplicationContext;
  private _gateway: MqttGateway;  

  constructor(channel: Observable<MqttMessage>) {
    this._logger = new Logger(this.constructor.name);
    this._gateway = MqttGateway.getInstance();
    this._applicationContext = ApplicationContext.getInstance();
    
    this._applicationContext.getItem('config').subscribe((config: any) => this._config = config);
    
    channel.subscribe((message: MqttMessage) => this.processMessage(message));
    this.emit();
  }

  private emit(): void {
    this._interval = setInterval(() => {
      if(!this._config || !this._config.node) return;

      let nodeState = { id: this._config.node.id, name: this._config.node.name };
      nodeState.details = this._generateSystemDetails();
      nodeState.status = {
        state: 'online',
        timestamp: new Date()
      }
      
      const event = new EventMessage(EventMessageType.NODE_STATE_CHANGED, nodeState);
      const outbound = new MqttMessage('system/node/status', event);

      this._gateway.outbound(outbound);
    }, 1000);
  }

  public processMessage(message: MqttMessage): void {
    const registration = new MqttMessage('system/node/register', this._config.node);
    this._gateway.outbound(registration);
  }

  private _generateSystemDetails(): SystemDetails {
    return new SystemDetails(
      os.arch(),
      os.type(),
      os.platform(),
      os.release(),
      os.hostname(),
      os.uptime(),
      os.cpus(),
      os.loadavg(),
      os.freemem(),
      os.totalmem()
    );
  }
}
