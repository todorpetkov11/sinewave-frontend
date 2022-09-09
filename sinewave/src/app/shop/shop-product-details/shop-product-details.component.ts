import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import * as Aos from 'aos';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductService, private router: ActivatedRoute) { }

  public product: Product;
  public productImages: string[] = [];

  ngOnInit(): void {
    Aos.init()
    this.productService.getProductById(this.router.snapshot.paramMap.get('id')!).subscribe({
      next: (product) => {
        this.productImages.push(product.firstImage, product.secondImage)
        this.product = product
        console.log(product)
        console.log(this.productImages)
      }
    })
  }

  imageIndex: number = 0;
  public itemAdded: boolean = false;

  prevClick() {
    if (this.imageIndex == 0) {
      this.imageIndex = this.productImages.length - 1
    }
    else {
      this.imageIndex -= 1
    }
  }

  nextClick() {
    if (this.imageIndex == this.productImages.length - 1) {
      this.imageIndex = 0
    }
    else {
      this.imageIndex += 1
    }
  }

  imageClick(index: number) {
    this.imageIndex = index
  }

  addToCart(quantity: string, product: Product) {
    this.cartService.addToCart(Number(quantity), product)
    this.itemAdded = true;
    setTimeout(() => {
      this.itemAdded = false;
    }, 10000)
  }

  removeFromCartPopUp() {
    this.cartService.removeFromCartPopUp()
    this.itemAdded = false;
  }

}
