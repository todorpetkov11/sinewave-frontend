import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';



@NgModule({
  declarations: [
    PageCartComponent,
    PageAboutComponent,
    PageHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
