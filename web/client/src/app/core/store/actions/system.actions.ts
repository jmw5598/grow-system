import { Action } from '@ngrx/store';
import { System } from '../models/system.model';

export enum SystemActionTypes {
  ADD_DETAILS = '[SYSTEM] Add Details',
  UPDATE_DETAILS = '[SYSTEM] Update Details'
}

const value: System = new System();
