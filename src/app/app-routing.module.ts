import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { WatchlistComponent } from './user/watchlist/watchlist.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { OrderComponent } from './user/order/order.component';
import { OrderDetailComponent } from './user/order-detail/order-detail.component';
import { AdminOrderComponent } from './admin/order/admin-order.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { TopItemsComponent } from './user/order/top-items/top-items.component';
import { AdminTopItemsComponent } from './admin/admin-top-items/admin-top-items.component';
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductDetailsComponent } from './admin/admin-product-details/admin-product-details.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin/admin-update-product/admin-update-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent
  },
    {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },  
  {
    path: 'orders/:orderId',
    component: OrderDetailComponent
  }, 
  {
    path: 'admin',
    component: HomepageComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminTopItemsComponent,
      },
      {
        path: 'orders',
        component: AdminOrderComponent,
      },
      {
        path: 'orders/:orderId',
        component: AdminOrderDetailsComponent,
      },
      {
        path: 'products',
        component: AdminProductComponent,
      },
      {
        path: 'products/add',
        component: AdminAddProductComponent,
      },
      {
        path: 'products/update/:id',
        component: AdminUpdateProductComponent,
      },
      {
        path: 'products/:id',
        component: AdminProductDetailsComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
