import { ToastLocation } from './toast-location.enum';

export class ToasterOptions {
  public location: ToastLocation;

  constructor(location: ToastLocation) {
    this.location = location;
  }
}