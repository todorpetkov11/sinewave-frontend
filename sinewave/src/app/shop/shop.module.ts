import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { ShopProductComponent } from './shop-product/shop-product.component';



@NgModule({
  declarations: [
    ShopMainComponent,
    ShopProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopMainComponent
  ]
})
export class ShopModule { }
