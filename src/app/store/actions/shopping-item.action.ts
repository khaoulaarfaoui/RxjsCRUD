import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping-item.model';

/*what actions do we have*/
/*describe the actions that we have on the shopping app*/

export enum ShoppingItemTypes {
  /* ACTION STRINGS HAVE TO BE UNIQUE
  between the brackets -> we are saying this action is from the shopping state */
  //this will loads our shopping from the API
  LOAD_SHOPPING='[SHOPPING] LOADING_ITEM',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] ADD_ITEM',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM= '[SHOPPING] DELETE_ITEM',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
  UPDATE_ITEM= '[SHOPPING] UPDATE_ITEM',
  UPDATE_ITEM_SUCCESS = '[SHOPPING] UPDATE Item Success',
  UPDATE_ITEM_FAILURE = '[SHOPPING] UPDATE Item Failure',

    }
    //we dont have a payload here cuz basically we are saying to the store we are
  //intending to load the items
//if we had a success response from the API than the loadshopping success action will be
//triggered others wise the failure object
export class LoadShoppingAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING_SUCCESS
  constructor(public payload: Array<ShoppingItem>) {}
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING_FAILURE
  constructor(public payload: Error) {}
}
/* every action has two main prop a type and an optional payload or matadata */
export class AddItemAction implements Action {
  /*the type which is readonly
  /the type of action that we gonna dispatch into the store*/
  readonly type = ShoppingItemTypes.ADD_ITEM;
  /*METADATA that goes along side this action*/
  /*ofcourse if we gonna add something we need to pass to the constructor the object that we gonna add*/
  constructor(public payload: ShoppingItem) {}
}
export class AddItemSuccessAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM_SUCCESS
  constructor(public payload: ShoppingItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}
export class UpdateItemAction implements Action {
  /*the type which is readonly
  /the type of action that we gonna dispatch into the store*/
  readonly type = ShoppingItemTypes.UPDATE_ITEM;
  /*METADATA that goes along side this action*/
  /*ofcourse if we gonna add something we need to pass to the constructor the object that we gonna add*/
  constructor(public payload: ShoppingItem) {}
}
export class UpdateItemSuccessAction implements Action {
  readonly type = ShoppingItemTypes.UPDATE_ITEM_SUCCESS
  constructor(public payload: ShoppingItem) { }
}
export class UpdateItemFailureAction implements Action {
  readonly type = ShoppingItemTypes.UPDATE_ITEM_FAILURE

  constructor(public payload: Error) { }
}
export class DeleteItemAction implements Action {
  /*the type which is readonly
  /the type of action that we gonna dispatch into the store*/
  readonly type = ShoppingItemTypes.DELETE_ITEM;
  /*METADATA that goes along side this action*/

  /*ofcourse if we gonna add something we need to pass to the constructor the object that we gonna add*/
  constructor(public payload: string) {
  }
}export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM_SUCCESS
  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM_FAILURE
  constructor(public payload: string) { }
}

export type ShoppingAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadShoppingAction |
  LoadShoppingFailureAction |
  LoadShoppingSuccessAction|
  UpdateItemAction|
  UpdateItemSuccessAction|
  UpdateItemFailureAction
