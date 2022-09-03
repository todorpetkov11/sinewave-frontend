import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageCartComponent,
    PageAboutComponent,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
