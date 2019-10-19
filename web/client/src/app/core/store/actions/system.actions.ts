import { Action } from '@ngrx/store';
import { System } from '../models/system.model';

export enum SystemActionTypes {
  ADD_DETAILS = '[SYSTEM] Add Details',
  UPDATE_DETAILS = '[SYSTEM] Update Details'
}

const value: System = new System();

/*
export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item'
}

export class AddItemAction implements Action {
  public readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
  public readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
*/