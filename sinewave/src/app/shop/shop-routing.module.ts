import { RouterModule, Routes } from '@angular/router';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';

const routes: Routes = [
  {
    path: 'shop',
    children: [
      {
        path: '', component: ShopMainComponent, children: [
          { path: 'staff-picks', component: ShopMainComponent },
          { path: 'books', component: ShopMainComponent },
          { path: 'magazines', component: ShopMainComponent },
          { path: 'accessories', component: ShopMainComponent },
          { path: 'sale', component: ShopMainComponent },
        ]
      },
      { path: 'p/:id', component: ShopProductDetailsComponent },
    ]
  },

];


export const ShopRoutingModule = RouterModule.forChild(routes)
