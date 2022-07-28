import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';
import { ImageSlideDirective } from './directives/image-slide.directive';




@NgModule({
  declarations: [
    ShopMainComponent,
    ShopProductComponent,
    ShopProductDetailsComponent,
    ImageSlideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopMainComponent
  ]
})
export class ShopModule { }
