import { ToastType } from './toast-type.enum';

export class ToastMessage {
  public title: string;
  public message: string;
  public type: ToastType;
  public duration: number;
  public isShown: boolean;

  constructor(title: string, message: string, type: ToastType, duration: number) {
    this.title = title;
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.isShown = true;
  }
}