import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItems.asObservable();

  constructor() { }

  getCartCount() {
    this.updateCartItems()
    return this.totalItems$;
  }

  updateCartItems() {
    this.totalItems.next(this.getCart().length);
  }

  getCart() {
    if (localStorage.getItem('cart') == null) {
      return null
    }
    else {
      return JSON.parse(localStorage.getItem('cart')!)
    }
  }

  createCart(cartArray: string[]) {
    localStorage.setItem('cart', JSON.stringify(cartArray))
  }

  addToCart(quantity: string, bookName: string) {
    if (this.getCart() == null) {
      let cartArray = []
      for (let i = 0; i < Number(quantity); i++) {
        cartArray.push(bookName)
      }
      this.createCart(cartArray)
    }
    else {
      let cartArray = this.getCart()
      for (let i = 0; i < Number(quantity); i++) {
        cartArray.push(bookName)
      }
      this.createCart(cartArray)
    }
    this.updateCartItems()
  }

}
