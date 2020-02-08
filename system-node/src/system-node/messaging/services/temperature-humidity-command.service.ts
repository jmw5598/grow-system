import { ApplicationContext, IMessageService, MqttMessage } from '@grow/common'; 
import { Observable } from 'rxjs';

export class TemperatureHumidityCommandService implements IMessageService {
  private readonly _context: ApplicationContext;
  private _actions: any;

  constructor(channel: Observable<MqttMessage>) {
    this._context = ApplicationContext.getInstance();
    this._context.getItem('action').subscribe((actions: any) => this._actions = actions);
    
    channel.subscribe((message: MqttMessage) => this.processMessage(message));      
  }

  public processMessage(message: MqttMessage): void {
    if(!this._actions) return;
    let sensor = this._actions.find((sensor: any) => sensor.id === message.message.component.id);
    
    if (!sensor) return;

    const event = message.message.command;

    switch(event) {
      case 'start':
        sensor.start();
        break;
      case 'stop':
        sensor.stop();
        break;
      case 'setInterval':
        sensor.setInterval(message.message.component.interval);
        break;
      case 'setThreshold':
        sensor.setThreshold(message.message.component.threshold);
        break;
      default:
        console.log('[TemperatureHumidityCommandService] Process, no processing case found');
        break;
    }

  }

}
