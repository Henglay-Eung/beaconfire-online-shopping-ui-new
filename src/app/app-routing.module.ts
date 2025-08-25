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
import { AdminHomepageComponent } from './admin/homepage/admin-homepage.component';
import { AdminTopItemsComponent } from './admin/admin-top-items/admin-top-items.component';
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductDetailsComponent } from './admin/admin-product-details/admin-product-details.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin/admin-update-product/admin-update-product.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { InsightsComponent } from './user/insights/insights.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: InsightsComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
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
    ]
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
    path: 'admin',
    component: AdminHomepageComponent,
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
