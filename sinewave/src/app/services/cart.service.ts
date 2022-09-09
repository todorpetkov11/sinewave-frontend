import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

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

    // TODO: Can remove one one that has a quantity of 2 and more
  }

  removeFromCart(id: number) {
    let cart = this.getCart()
    cart.splice(id)
    this.createUpdateCart(cart)
  }

  createUpdateCart(cartArray: {}[]) {
    localStorage.setItem('cart', JSON.stringify(cartArray))
    this.updateCartCount();
  }

  addToCart(quantity: number, product: Product) {
    if (this.getCart() == null) {
      let cartArray = [{
        'product': product,
        'quantity': quantity,
      }]
      this.createUpdateCart(cartArray)
    }
    else {
      let cartArray = this.getCart()
      let item = {
        'product': product,
        'quantity': quantity,
      }
      cartArray.push(item)

      this.createUpdateCart(cartArray)
    }
  }

}
