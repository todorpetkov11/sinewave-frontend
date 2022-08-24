import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ShopMainComponent } from './shop/shop-main/shop-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    pathMatch: 'full',
    component: PageHomeComponent
  },

  {
    path: 'shop',
    pathMatch: 'full',
    component: ShopMainComponent
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: PageCartComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: PageAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
