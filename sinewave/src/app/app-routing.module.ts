import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopMainComponent } from './shop/shop-main/shop-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop'
  },

  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'shop'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
