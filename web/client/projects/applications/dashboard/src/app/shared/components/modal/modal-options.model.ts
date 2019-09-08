import { ModalType } from './modal-type.enum';
import { ModalSize } from './modal-size.enum';

export class ModalOptions {
  public isShown: boolean;
  public type: ModalType;
  public size: ModalSize;

  constructor() {
    this.isShown = false;
    this.type = ModalType.DEFAULT;
    this.size = ModalSize.MEDIUM;
  }
}