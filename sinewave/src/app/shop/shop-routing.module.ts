import { RouterModule, Routes } from '@angular/router';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';

const routes: Routes = [
  {
    path: 'shop',
    children: [
      { path: '', component: ShopMainComponent },
      { path: 'p/:id', component: ShopProductDetailsComponent },
      { path: 'staff-pick' },
      { path: 'books' },
      { path: 'magazines' },
      { path: 'accessories' },
      { path: 'sale' },
    ]
  },

];


export const ShopRoutingModule = RouterModule.forChild(routes)
