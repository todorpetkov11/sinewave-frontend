import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public albumArray: Product[];

  ngOnInit(): void {
    AOS.init()

    this.productService.getProducts().subscribe({
      next: (product) => {
        this.albumArray = product
      }
    })
  }

}
