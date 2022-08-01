import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  imageObject: Array<object> = [{
    image: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914874-6YLWE3UUH9U8RK1UD78Z/The-Original-Book_3.jpg?format=1500w',
    alt: 'alt of image',
    thumbImage: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914874-6YLWE3UUH9U8RK1UD78Z/The-Original-Book_3.jpg?format=1500w',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914881-QCG5UCYLM7CHTD3HYBZT/The-Original-Book_1.jpg?format=1500w',
    alt: 'alt of image',
    thumbImage: 'https://images.squarespace-cdn.com/content/v1/624b503a204884599f31416a/1649102914881-QCG5UCYLM7CHTD3HYBZT/The-Original-Book_1.jpg?format=1500w',
  }
  ];

}
