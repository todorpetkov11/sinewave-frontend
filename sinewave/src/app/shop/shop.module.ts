import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';
import { ImageSlideDirective } from './directives/image-slide.directive';
import { NgImageSliderModule } from 'ng-image-slider';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopProductRelatedComponent } from './shop-product-related/shop-product-related.component';




@NgModule({
  declarations: [
    ShopMainComponent,
    ShopProductComponent,
    ShopProductDetailsComponent,
    ImageSlideDirective,
    ShopProductRelatedComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    ShopRoutingModule,
  ],
  exports: [
    ShopMainComponent
  ]
})
export class ShopModule { }
