/*effects is just a service */
import {Injectable} from '@angular/core'
import {Actions, ofType, Effect} from '@ngrx/effects';
import {
  AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingItemTypes, UpdateItemAction, UpdateItemFailureAction, UpdateItemSuccessAction
} from '../actions/shopping-item.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ShoppingService} from '../../shopping.service';
import {of} from 'rxjs';
@Injectable()
export class ShoppingEffects{
/*Next, we're listening to actions and using ofType to
gain access to the Action that matches LoadShoppingAction.
 */
  /* we are listing to the actions inside our application*/
  /*A Pipeable Operator is a function that takes an Observable as its input
  and returns another Observable. It is a pure operation: the previous Observable stays unmodified.
   */
  @Effect() loadShopping$ = this.actions$
    .pipe(

      /*if the action type matches the type we are looking for*/
      ofType<LoadShoppingAction>(ShoppingItemTypes.LOAD_SHOPPING),

      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => {
              return new LoadShoppingSuccessAction(data)
            }),
            catchError(error => of(new LoadShoppingFailureAction(error)))
          )
      ),
    )
  @Effect() addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ShoppingItemTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )
  @Effect() updateShoppingItem$ = this.actions$
    .pipe(
      ofType<UpdateItemAction>(ShoppingItemTypes.UPDATE_ITEM),
      mergeMap(
        (data) => this.shoppingService.updateshoppingItem(data.payload.id, data.payload)
          .pipe(
            map(() => new UpdateItemSuccessAction(data.payload)),
            catchError(error => of(new UpdateItemFailureAction(error)))
          )
      )
    )

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ShoppingItemTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    )
  //injecting the Actions will give us the aibility to listen to the actions
  //fired all along our app
  constructor(private actions$: Actions, private shoppingService: ShoppingService) {
  }
}
