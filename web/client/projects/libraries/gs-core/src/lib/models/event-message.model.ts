import { EventMessageType } from './event-message-type.enum';

export class EventMessage {
  public event: EventMessageType;
  public payload: any;
}