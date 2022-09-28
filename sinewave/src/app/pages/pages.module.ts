import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';



@NgModule({
  declarations: [
    PageCartComponent,
    PageAboutComponent,
    PageHomeComponent,
    PageContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class PagesModule { }
