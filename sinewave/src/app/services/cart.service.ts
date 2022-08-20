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
    this.updateCartCount()
    return this.totalItems$;
  }

  updateCartCount() {
    if (this.getCart() == null) {
      this.totalItems.next(0);
    }
    else {
      this.totalItems.next(this.getCart().length);
    }
  }

  getCart() {
    if (localStorage.getItem('cart') == null) {
      return null
    }
    else {
      return JSON.parse(localStorage.getItem('cart')!)
    }
  }

  removeFromCartPopUp() {
    let cart = this.getCart()
    cart.pop()
    this.createUpdateCart(cart)
    this.updateCartCount()

    // TODO: Can remove one one that has a quantity of 2 and more
  }

  createUpdateCart(cartArray: string[]) {
    localStorage.setItem('cart', JSON.stringify(cartArray))
  }

  addToCart(quantity: string, itemId: string) {
    if (this.getCart() == null) {
      let cartArray = []
      for (let i = 0; i < Number(quantity); i++) {
        cartArray.push(itemId)
      }
      this.createUpdateCart(cartArray)
    }
    else {
      let cartArray = this.getCart()
      for (let i = 0; i < Number(quantity); i++) {
        cartArray.push(itemId)
      }
      this.createUpdateCart(cartArray)
    }
    this.updateCartCount()
  }

}
