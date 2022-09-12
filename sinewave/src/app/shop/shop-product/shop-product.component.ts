import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {

  constructor() { }

  @Input() album: Product

  ngOnInit(): void {

    // TODO: URL on Change detection
    // TODO: URL on Change detection
    // TODO: URL on Change detection
    // TODO: URL on Change detection
  }


}
