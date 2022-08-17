import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-shop-product-related',
  templateUrl: './shop-product-related.component.html',
  styleUrls: ['./shop-product-related.component.css']
})
export class ShopProductRelatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
