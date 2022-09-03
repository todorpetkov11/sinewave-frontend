import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  public cart = this.cartService.getCart()

  ngOnInit(): void {
    Aos.init()
    console.log(this.cart.length)
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
  }

  addQuantity(id: number) {
    this.cart[id]["quantity"] += 1;
    this.cartService.createUpdateCart(this.cart)
  }

  removeFromCart(id: number) {
    this.cart.splice(id)
    this.cartService.removeFromCart(id)
  }


}
