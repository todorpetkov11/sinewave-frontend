import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

  imageIndex: number = 0;

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


  productImages = [{
    image: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914874-6YLWE3UUH9U8RK1UD78Z/The-Original-Book_3.jpg?format=1500w',
    alt: 'alt of image',
    thumbImage: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914874-6YLWE3UUH9U8RK1UD78Z/The-Original-Book_3.jpg?format=1500w',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    alt: 'alt of image',
    thumbImage: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914881-QCG5UCYLM7CHTD3HYBZT/The-Original-Book_1.jpg?format=1500w',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    alt: 'alt of image',
    thumbImage: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914881-QCG5UCYLM7CHTD3HYBZT/The-Original-Book_1.jpg?format=1500w',
  }
  ];

}
