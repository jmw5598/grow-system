import { AlertType } from './alert-type.enum';

export class AlertMessage {
  constructor(
    public message: string,
    public title?: string,
    public type?: AlertType
  ) {}
}
