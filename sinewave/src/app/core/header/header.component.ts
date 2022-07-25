import { Component, OnInit } from '@angular/core';
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public cart = faCartShopping
  public instagram = faInstagram
  public twitter = faTwitter
  public bars = faBars
  public barsExit = faX
  
  public navIsVisible: boolean = false

  ngOnInit(): void {
  }

  onBarsClick() {
    this.navIsVisible = !this.navIsVisible
  }

}
