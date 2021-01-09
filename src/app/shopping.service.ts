import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from './store/models/shopping-item.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {


  private SHOPPING_URL = "http://localhost:3000/shopping"

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    console.log(this.http.get<Array<ShoppingItem>>(this.SHOPPING_URL));
    return this.http.get<Array<ShoppingItem>>(this.SHOPPING_URL)
      .pipe(
        delay(500)
      )
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem)
      .pipe(
        delay(500)
      )
  }

  updateshoppingItem(id, shoppingItem: ShoppingItem) {
    return this.http.put(`${this.SHOPPING_URL}/${id}`, shoppingItem)
      .pipe(
        delay(500)
      )
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`)
      .pipe(
        delay(500)
      )
  }
}

