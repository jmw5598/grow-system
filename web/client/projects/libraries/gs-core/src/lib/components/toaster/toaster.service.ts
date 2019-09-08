import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ToastMessage } from './toast-message.model';
import { ToastType } from './toast-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private messagesSource: Subject<ToastMessage> = new Subject<ToastMessage>();
  public messages: Observable<ToastMessage> = this.messagesSource.asObservable();

  constructor() { }

  toast(title: string, message: string, type: ToastType, duration: number = 1000) {
    const toast: ToastMessage = new ToastMessage(title, message, type, duration);
    this.messagesSource.next(toast);
  }
}
