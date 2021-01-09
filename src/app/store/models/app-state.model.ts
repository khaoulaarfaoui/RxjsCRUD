import {ShoppingItem} from './shopping-item.model';
import {ShoppingState} from '../reducers/shopping-item.reducer';

export interface AppState{
  //This will allow us to type the structure of our Store and make it easier to select slices of state
  // in the future.
  //EXMPL there's cart state
  //there's shopping state
  readonly shopping: ShoppingState;
}
