import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  public cart = this.cartService.getCart()
  public totalPrice: number;

  ngOnInit(): void {
    Aos.init()
    this.updateTotalPrice()
  }

  subQuantity(id: number) {
    if (this.cart[id]["quantity"] == 1) {
      this.cart.splice(id)
      this.cartService.createUpdateCart(this.cart)
    }
    else {
      this.cart[id]["quantity"] -= 1;
      this.cartService.createUpdateCart(this.cart)
    }
    this.updateTotalPrice()
  }

  addQuantity(id: number) {
    this.cart[id]["quantity"] += 1;
    this.cartService.createUpdateCart(this.cart)
    this.updateTotalPrice()
  }

  removeFromCart(id: number) {
    this.cart.splice(id, id+1)
    this.cartService.removeFromCart(id)
    this.updateTotalPrice()
  }

  updateTotalPrice() {
    let price = 0;
    for (let item of this.cart) {
      price += item.product.price * item.quantity
    }
    this.totalPrice = price
  }

}
