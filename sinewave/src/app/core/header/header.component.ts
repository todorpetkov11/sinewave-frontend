import { Component, OnDestroy, OnInit } from '@angular/core';
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService) {
  }

  public cart = faCartShopping
  public instagram = faInstagram
  public twitter = faTwitter
  public bars = faBars
  public barsExit = faX
  public navIsVisible: boolean = false
  public cartCount: number = 0;
  private cartSub!: Subscription;

  ngOnInit() {
    this.cartSub = this.cartService.getCartCount()
      .subscribe(value => {
        this.cartCount = value;
      })
  }

  onBarsClick() {
    this.navIsVisible = !this.navIsVisible
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }

}
