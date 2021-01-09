import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/models/app-state.model';
import {observable, Observable} from 'rxjs';
import {ShoppingItem} from './store/models/shopping-item.model';
import {AddItemAction, DeleteItemAction, LoadShoppingAction, UpdateItemAction} from './store/actions/shopping-item.action';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  up: boolean=true;
  shoppingitems: Observable<Array<ShoppingItem>>;
  loading$:Observable <Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem={id:'', name: ''};
  title = 'ngrx-shopping';
  /*dependency injection*/
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.shoppingitems=this.store.select(store=>store.shopping.list);
    this.loading$=this.store.select(store =>store.shopping.loading);
    this.error$=this.store.select(store =>store.shopping.error);
    this.store.dispatch(new LoadShoppingAction())
  }
addItem(){
    /* gonna dispatch an action to the store */
  /* this AddItemAction expects a payload (data) */
  this.newShoppingItem.id = uuid();
  this.store.dispatch(new AddItemAction(this.newShoppingItem));
  this.newShoppingItem={id:'', name: ''}
}

  removeItem(id) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  updateItem(id: string, name: string) {
    this.up=false;
    this.newShoppingItem.id=id;
    this.newShoppingItem.name=name;

  }
  confirmUpdate() {
    this.store.dispatch(new UpdateItemAction(this.newShoppingItem));
    this.newShoppingItem={id:'', name: ''}
    this.up=true;
  }
}
