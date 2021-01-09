/*this reducer is managing the transition of the state from state X to state Y
this takes an array of shopping items and if we add a new item it will return a new array
 */
/*lets first define the our initial state*/
import {ShoppingItem} from '../models/shopping-item.model';
import {ShoppingAction, ShoppingItemTypes} from '../actions/shopping-item.action';

//we gonna create a shopping state here
export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false, // we wont be loading initially
  error: undefined
};


export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction){
  //whats our current state and whats the action that's being fired on that state
  switch (action.type){
    case ShoppingItemTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      }
    case ShoppingItemTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case ShoppingItemTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ShoppingItemTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case ShoppingItemTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ShoppingItemTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ShoppingItemTypes.UPDATE_ITEM:
      return {
        ...state,
        loading: true
      }
    case ShoppingItemTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        //list: [...state.list, action.payload],
        list: state.list.map(item =>{ return item.id === action.payload.id ? Object.assign({}, action.payload):item}),
        loading: false
      };
    case ShoppingItemTypes.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingItemTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingItemTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case ShoppingItemTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
      /* if we had action of add item we want to return all the previous states but also
      add action.data to the end of that // we are returning a new version */
      //loading is false because we re not loading anymore
      // ...state -> means the previous state
      /*
    case ShoppingItemTypes.ADD_ITEM_SUCCESS:

      return {...state,list: action.payload, loading: false}
    case ShoppingItemTypes.DELETE_ITEM_SUCCESS:
      return {... state, list: state.list.filter(item => item.id !== action.payload), loading: false};
    case ShoppingItemTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case ShoppingItemTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingItemTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingItemTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ShoppingItemTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      }
    case ShoppingItemTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case ShoppingItemTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

      //if no action happened
    default:
      return state;
      */
  }
}
