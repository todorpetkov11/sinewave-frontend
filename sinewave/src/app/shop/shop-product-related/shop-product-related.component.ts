import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-product-related',
  templateUrl: './shop-product-related.component.html',
  styleUrls: ['./shop-product-related.component.css']
})
export class ShopProductRelatedComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public relatedProducts: Product[] = [];
  @Input() param: string;

  ngOnInit(): void {
    Aos.init()
    this.productService.getRelatedProducts(this.param).subscribe({
      next: (products) => {
        this.relatedProducts = products
        console.log(products)
        console.log(this.relatedProducts)
      }
    })
  }

}
